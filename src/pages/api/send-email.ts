import type { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface ApiResponse {
  success?: boolean;
  error?: string;
  details?: unknown;
  data?: unknown;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse>
) {
  // POSTメソッドのみ許可
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, phone, message }: ContactFormData = req.body;
    
    console.log('Received contact form data:', { name, email: !!email, phone: !!phone, message: !!message });

    // サーバーサイドバリデーション
    if (!name?.trim()) {
      return res.status(400).json({ error: '氏名は必須です' });
    }

    if (!message?.trim()) {
      return res.status(400).json({ error: 'お問い合わせ内容は必須です' });
    }

    // メールアドレスまたは電話番号のどちらかは必須
    const hasEmail = email?.trim();
    const hasPhone = phone?.trim();
    
    if (!hasEmail && !hasPhone) {
      return res.status(400).json({ 
        error: 'メールアドレスまたは電話番号のどちらかは必須です' 
      });
    }

    // メールアドレスの形式チェック
    if (hasEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({ 
        error: '正しいメールアドレスの形式で入力してください' 
      });
    }

    // 電話番号の形式チェック（ハイフンありなし両方対応）
    if (hasPhone && !/^[0-9-]+$/.test(phone)) {
      return res.status(400).json({ 
        error: '正しい電話番号の形式で入力してください' 
      });
    }

    // 必要な環境変数の存在確認
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not configured');
      return res.status(500).json({ 
        error: 'メール送信の設定が正しくありません（API KEY）' 
      });
    }


    console.log('Environment variables check passed');

    // メール送信（テスト用：入力されたメールアドレスに送信）
    const { data, error } = await resend.emails.send({
      from: `${process.env.EMAIL_FROM_NAME} <noreply@${process.env.EMAIL_FROM_DOMAIN}>`,
      to: [email], // 入力されたメールアドレスに送信
      subject: `【お問い合わせ】${name}様より`,
      html: `
        <!DOCTYPE html>
        <html lang="ja">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>お問い合わせ</title>
        </head>
        <body style="margin: 0; padding: 0; background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%); font-family: 'Noto Sans JP', 'Inter', Arial, sans-serif;">
          <div style="max-width: 600px; margin: 0 auto; background: #0f0f23; border: 2px solid #00ffff; border-radius: 12px; overflow: hidden; box-shadow: 0 0 30px rgba(0, 255, 255, 0.3);">
            
            <!-- ヘッダー -->
            <div style="background: linear-gradient(45deg, #001122 0%, #002244 100%); padding: 30px 20px; text-align: center; border-bottom: 2px solid #00ffff;">
              <h1 style="margin: 0; color: #00ffff; font-size: 24px; font-weight: 600; text-shadow: 0 0 10px rgba(0, 255, 255, 0.5);">
                📧 お問い合わせ
              </h1>
              <p style="margin: 10px 0 0 0; color: #ffffff; opacity: 0.8; font-size: 14px;">
                ポートフォリオサイトからのメッセージ
              </p>
            </div>
            
            <!-- 送信者情報 -->
            <div style="padding: 30px 20px; background: rgba(0, 255, 255, 0.05);">
              <h2 style="margin: 0 0 20px 0; color: #00ffff; font-size: 18px; font-weight: 500; display: flex; align-items: center;">
                👤 送信者情報
              </h2>
              
              <div style="background: rgba(0, 0, 0, 0.3); border: 1px solid rgba(0, 255, 255, 0.3); border-radius: 8px; padding: 20px;">
                <div style="margin-bottom: 15px;">
                  <span style="color: #ff00ff; font-weight: 600; font-size: 14px;">氏名:</span>
                  <span style="color: #ffffff; margin-left: 10px; font-size: 16px;">${name}</span>
                </div>
                
                ${hasEmail ? `
                <div style="margin-bottom: 15px;">
                  <span style="color: #ff00ff; font-weight: 600; font-size: 14px;">メールアドレス:</span>
                  <a href="mailto:${email}" style="color: #00ffff; margin-left: 10px; text-decoration: none; font-size: 16px;">${email}</a>
                </div>
                ` : ''}
                
                ${hasPhone ? `
                <div style="margin-bottom: 0;">
                  <span style="color: #ff00ff; font-weight: 600; font-size: 14px;">電話番号:</span>
                  <span style="color: #ffffff; margin-left: 10px; font-size: 16px;">${phone}</span>
                </div>
                ` : ''}
              </div>
            </div>
            
            <!-- メッセージ内容 -->
            <div style="padding: 30px 20px;">
              <h2 style="margin: 0 0 20px 0; color: #00ffff; font-size: 18px; font-weight: 500; display: flex; align-items: center;">
                💬 お問い合わせ内容
              </h2>
              
              <div style="background: rgba(0, 0, 0, 0.5); border: 1px solid rgba(0, 255, 255, 0.3); border-left: 4px solid #00ffff; border-radius: 8px; padding: 20px;">
                <div style="color: #ffffff; line-height: 1.8; font-size: 16px; white-space: pre-wrap;">${message}</div>
              </div>
            </div>
            
            <!-- フッター -->
            <div style="background: rgba(0, 0, 0, 0.8); padding: 20px; text-align: center; border-top: 1px solid rgba(0, 255, 255, 0.3);">
              <p style="margin: 0; color: rgba(255, 255, 255, 0.6); font-size: 12px;">
                🌐 このメールはポートフォリオサイト（yuki-ueno.com）のお問い合わせフォームから送信されました
              </p>
              <p style="margin: 10px 0 0 0; color: rgba(0, 255, 255, 0.8); font-size: 11px;">
                © 2025 YUKI UENO. All Rights Reserved.
              </p>
            </div>
            
          </div>
        </body>
        </html>
      `,
    });

    if (error) {
      console.error('Resend API error:', error);
      return res.status(500).json({ 
        error: 'メール送信に失敗しました。しばらく時間をおいて再度お試しください。',
        details: error 
      });
    }

    console.log('Email sent successfully:', data);
    return res.status(200).json({ success: true, data });

  } catch (error) {
    console.error('Contact form error:', error);
    
    // エラーの詳細情報を含める
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    const errorStack = error instanceof Error ? error.stack : undefined;
    
    console.error('Error details:', { message: errorMessage, stack: errorStack });
    
    return res.status(500).json({ 
      error: 'システムエラーが発生しました。しばらく時間をおいて再度お試しください。',
      details: errorMessage
    });
  }
}