import { SizeMe } from "react-sizeme";
import ReCAPTCHA from "react-google-recaptcha";

const ReCaptchaContainer = () => {
  return (
    <SizeMe>
      {({ size }) => {
        size.width > 480 ? (
          <ReCAPTCHA sitekey={process.env.GATSBY_RECAPTCHA_KEY} />
        ) : (
          <ReCAPTCHA
            sitekey={process.env.GATSBY_RECAPTCHA_KEY}
            theme="dark"
            size="compact"
          />
        );
      }}
    </SizeMe>
  );
};

export default sizeMe()(ReCaptchaContainer);
