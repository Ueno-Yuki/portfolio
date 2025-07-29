import { NextApiRequest, NextApiResponse } from 'next';

interface EmailData {
  name: string;
  email: string;
  message: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, message }: EmailData = req.body;

  // バリデーション
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  // メールアドレスの簡単なバリデーション
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email format' });
  }

  try {
    // 実際のメール送信処理（この例ではログ出力のみ）
    // 本番環境では、SendGrid、Nodemailer、またはその他のメールサービスを使用
    console.log('Email to send:', {
      to: process.env.CONTACT_EMAIL,
      from: email,
      subject: `Portfolio Contact from ${name}`,
      text: `
Name: ${name}
Email: ${email}
Message: ${message}
      `
    });

    // 簡単なメール送信シミュレーション
    // 実際の実装では、メールサービスのAPIを呼び出す
    await new Promise(resolve => setTimeout(resolve, 1000)); // 1秒待機

    return res.status(200).json({ 
      success: true, 
      message: 'Email sent successfully' 
    });

  } catch (error) {
    console.error('Email sending error:', error);
    return res.status(500).json({ 
      error: 'Failed to send email. Please try again later.' 
    });
  }
}