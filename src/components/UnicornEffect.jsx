import { useEffect } from "react";

export default function UnicornEffect() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "YOUR_UNICORN_SCRIPT_LINK_HERE"; // yaha unicorn studio ka script paste karo
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div id="unicorn" style={{ width: "100%", height: "400px" }}></div>;
}
