import { Button } from "@/components/ui/button";
import { TypeComponentFooter } from "@/lib/types";
import { LucideProps } from "lucide-react";
import dynamicIconImports from "lucide-react/dynamicIconImports";
import dynamic from "next/dynamic";

type MainFooterProps = {
  data: TypeComponentFooter;
};

interface IconProps extends Omit<LucideProps, "ref"> {
  name: keyof typeof dynamicIconImports;
}

const Icon = ({ name, ...props }: IconProps) => {
  const LucideIcon = dynamic(dynamicIconImports[name]);

  return <LucideIcon {...props} />;
};

function MainFooter({ data }: MainFooterProps) {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-20 px-4">
        <ul className="flex gap-4">
          {data.footerLinks?.basicLinkListGroupCollection?.items &&
            data.footerLinks?.basicLinkListGroupCollection?.items.map(
              (linkItem) => {
                return (
                  <li key={linkItem.basicLinkText}>
                    <Button variant="ghost" size="icon-lg" asChild>
                      <a
                        href={linkItem.basicLinkUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={linkItem.basicLinkText}
                      >
                        <Icon name={linkItem.basicLinkIcon || "circle-alert"} />
                      </a>
                    </Button>
                  </li>
                );
              }
            )}
        </ul>
        <div className="flex flex-col">
          <Button variant="link" size="link-no-padding" asChild>
            <a href="mailto:contact@miko-aro.com">contact@velo-miko.com</a>
          </Button>
          <span>{`© ${year}`}</span>
        </div>
      </div>
    </footer>
  );
}

export default MainFooter;
