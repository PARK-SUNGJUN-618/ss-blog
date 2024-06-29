import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  LineIcon,
  LineShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  RedditIcon,
  RedditShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "next-share";
import { FC } from "react";

interface Props {
  url: string;
  title?: string;
  quote?: string;
}

const Share: FC<Props> = ({ url, title, quote }): JSX.Element => {
  return (
    <div className="flex items-center space-x-3">
      <p className="font-semibold text-primary-dark dark:text-primary">
        Share:
      </p>

      <TwitterShareButton url={url} title={title}>
        <TwitterIcon round size={32} />
      </TwitterShareButton>

      <FacebookShareButton url={url} quote={quote} title={title}>
        <FacebookIcon round size={32} />
      </FacebookShareButton>

      <LineShareButton url={url} title={title}>
        <LineIcon round size={32} />
      </LineShareButton>

      <LinkedinShareButton url={url} source={quote} title={title}>
        <LinkedinIcon round size={32} />
      </LinkedinShareButton>

      <RedditShareButton url={url} title={title}>
        <RedditIcon round size={32} />
      </RedditShareButton>

      <WhatsappShareButton url={url} title={title} separator=":: ">
        <WhatsappIcon round size={32} />
      </WhatsappShareButton>

      <EmailShareButton url={url} title={title}>
        <EmailIcon round size={32} />
      </EmailShareButton>
    </div>
  );
};

export default Share;
