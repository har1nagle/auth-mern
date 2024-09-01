import { VERIFICATION_EMAIL_TEMPLATE, PASSWORD_RESET_REQUEST_TEMPLATE } from "./emailTemplates.js";
import { mailtrapClient, sender } from "./mailtrap.config.js";

 
export const sendVerificationEmail = async (email, verificationToken) => {
  const recipient = [{email}]

  try {
    const response = await mailtrapClient.send({
      from: sender,
      to: recipient,
      subject: "Verify your email",
      html: VERIFICATION_EMAIL_TEMPLATE.replace(
        "{verificationCode}",
        verificationToken
      ),
      category: "Email verificationToken",
    });

    console.log("EMail sent successfully", response);
  } catch (error) {
    console.log(`Error sending verification`, error);
    throw new Error(`Error sending verification email: ${error}`);
  }
};


//verify email

export const sendWelcomeEmail = async (email, name) => {

  const recipient = [{ email }];
  try {
    const response = await mailtrapClient.send({
      from: sender,
      to: recipient,
      template_uuid: "12bdb171-1d03-4930-9de1-659d7b6052fe",
      template_variables: {
        "company_info_name": "Auth Company",
        "name": name
      }
    });
    console.log("Welcome email sent successfully",response)
  } catch (error) {
    console.log("Error sending welcome email", error)
    
    throw new Error(`Error sending welcome email: ${error}`)
  }
}

export const sendPasswordResetEmail = async (email, resetURL) => {
  const recipient = [{email}];

  try {
    const response = await mailtrapClient.send({
      from: sender,
      to: recipient,
      subject: "Reset your password",
      html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", resetURL),
      category: "Password Reset",

    });
  } catch (error) {
    console.log(`Error sending password reset email`, error);
    throw new Error(`Error sending password reset email: ${error}`);
    
  }
}