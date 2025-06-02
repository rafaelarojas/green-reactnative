import random
import time
from fastapi import HTTPException
from email.message import EmailMessage
import smtplib
from dotenv import load_dotenv
import os

from models.otp_models import EmailModel, OTPModel, ResetModel

load_dotenv()

class OTPService:
    def __init__(self):
        self.otp_storage = {}

    def send_otp(self, data: EmailModel):
        otp = str(random.randint(100000, 999999))
        self.otp_storage[data.email] = {"otp": otp, "expires": time.time() + 300}
        print(f"Enviar este código para {data.email}: {otp}")

        corpo_email = f"<p>Olá, seu código é: {otp}</p>"

        msg = EmailMessage()
        msg['Subject'] = "Código de Verificação"
        msg['From'] = os.getenv('EMAIL')
        msg['To'] = data.email
        msg.set_content(corpo_email, subtype='html')

        password = os.getenv('SENHA')

        with smtplib.SMTP('smtp.gmail.com', 587) as s:
            s.starttls()
            s.login(msg['From'], password)
            s.send_message(msg)
            print('Email enviado com sucesso')

        return {"msg": "Código enviado"}

    def verify_otp(self, data: OTPModel):
        registro = self.otp_storage.get(data.email)
        if not registro or registro['otp'] != data.otp or time.time() > registro['expires']:
            raise HTTPException(status_code=400, detail="Código inválido ou expirado")
        return {"msg": "OTP válido"}

    def reset_password(self, data: ResetModel):
        print(f"Senha do {data.email} alterada para: {data.senha}")
        return {"msg": "Senha redefinida com sucesso"}
