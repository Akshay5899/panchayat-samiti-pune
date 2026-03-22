import { useEffect, useState } from "react";

function ScrollToTop() {
  const [showBtn, setShowBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBtn(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    showBtn && (
      <button onClick={scrollToTop} style={styles}>
        <i class="bi bi-chevron-double-up"></i>
      </button>
    )
  );
}

const styles = {
  position: "fixed",
  bottom: "20px",
  right: "20px",
  padding: "5px 10px",
  fontSize: "25px",
  borderRadius: "50%",
  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
  background: "#F28B43",
  color: "#fff",
  border: "none",
  cursor: "pointer",
  zIndex: 1000,
};

export default ScrollToTop;