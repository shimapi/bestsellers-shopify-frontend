import { useEffect } from "react";

const useCloseModal = (handleCloseModal) => {
	useEffect(() => {
		function handleEscKey(event) {
			if (event.key === "Escape" || event.key === "Esc") {
				handleCloseModal();
			}
		}
		function handleClickOutside(event) {
			if (event.target.classList.contains("modal-active")) {
				handleCloseModal();
			}
		}
		document.addEventListener("keydown", handleEscKey);
		document.addEventListener("click", handleClickOutside);

		return () => {
			document.removeEventListener("keydown", handleEscKey);
			document.removeEventListener("click", handleClickOutside);
		};
	}, [handleCloseModal]);
};

export default useCloseModal;
