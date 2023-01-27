import { NextApiRequest, NextApiResponse } from 'next';
import type { ContactFormData } from 'modules/email';
import sendEmail from 'modules/email';

interface Request extends NextApiRequest {
  body: ContactFormData;
}

export default async function handler(req: Request, res: NextApiResponse) {
  switch (req.method) {
    case 'POST':
      sendEmail({
        template: 'contactForm',
        to: 'secretary@quidditchuk.org',
        cc: 'admin@quidditchuk.org',
        data: req.body,
      });

      res.status(200).end();
      return;
    default:
      res.status(404).end();
      return;
  }
}
