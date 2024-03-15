import { Footer } from "flowbite-react";

function FooterSection() {
  return (
    <Footer container>
      <Footer.Copyright
        className="text-black font-medium"
        href="#"
        by="JP"
        year={2024}
      />
      <Footer.LinkGroup>
        <Footer.Link className="text-black font-medium text-md" href="#">
          Made with 💝 for you wapetona
        </Footer.Link>
      </Footer.LinkGroup>
    </Footer>
  );
}

export default FooterSection;
