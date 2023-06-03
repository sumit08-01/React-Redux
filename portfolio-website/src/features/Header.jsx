import { Flex, HStack, Image, Link } from "@chakra-ui/react";
import bubbleImg from "@/assets/images/bubble.png";
import logoImg from "@/assets/images/logo.png";
import flagENImg from "@/assets/images/flag-en.png";
// import flagFRImg from "@/assets/images/flag-fr.png";
import { useTranslation } from "react-i18next";

export const Header = () => {
  const { t, i18n } = useTranslation("home");

  const switchLanguage = () => {
    console.log("language changed");
    i18n.language = "en";
    console.log(i18n.language);

    i18n.changeLanguage(i18n.language === "en" ? "fr" : "en");
  };
  return (
    <Flex justify={"space-between"}>
      <Image src={logoImg} h={10} />
      <HStack>
        {/* this will align the component horizontialy */}
        <Image src={bubbleImg} h={10} />
        <Link
          href={
            "mailto:sumitgond9999@gmail.com?subject=Contacting you from your portfolio"
          }
          fontSize="lg"
          fontWeight="bold"
        >
          {t("hireMe")}
        </Link>
        <Image
          onClick={switchLanguage}
          pl={20}
          // src={i18n.language === "en" ? flagENImg : flagFRImg}
          src={flagENImg}
          h={8}
          cursor="pointer"
        />
      </HStack>
    </Flex>
  );
};
