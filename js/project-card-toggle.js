document.addEventListener("DOMContentLoaded", function () {
	const cards = document.querySelectorAll(".project-card");

	cards.forEach(function (card, index) {
		const toggle = card.querySelector(".project-card__toggle");
		const moreContent = card.querySelector(".project-card__more");
		const projectItem = card.closest(".project-item");

		if (!toggle || !moreContent) {
			return;
		}

		if (!moreContent.id) {
			moreContent.id = "project-card-more-" + (index + 1);
		}

		toggle.setAttribute("aria-controls", moreContent.id);
		toggle.setAttribute("aria-expanded", "false");
		moreContent.hidden = true;
		toggle.textContent = "View details";

		toggle.addEventListener("click", function () {
			const isExpanded = toggle.getAttribute("aria-expanded") === "true";
			const nextExpanded = !isExpanded;

			toggle.setAttribute("aria-expanded", String(nextExpanded));
			moreContent.hidden = !nextExpanded;
			card.classList.toggle("is-expanded", nextExpanded);
			if (projectItem) {
				projectItem.classList.toggle("project-item--expanded", nextExpanded);
			}
			toggle.textContent = nextExpanded ? "Hide details" : "View details";
		});
	});
});
