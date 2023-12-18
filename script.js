let CURRENT_STEP = 1;
const NUM_STEPS = 7;
const form = document.getElementById("egg-form");
const result = document.getElementById("result");
const description = document.getElementById("description");
form.addEventListener("submit", e => {
	e.preventDefault();
	nextStep();
	const formData = new FormData(e.target);
	const data = Object.fromEntries(formData.entries());
	const values = Object.values(data).map(value => parseInt(value));
	const total = values.reduce((a, b) => a + b, 0);
	if (total < 0) {
		result.innerText = "an egg"
		description.innerText = "Congratulations! You cracked it! 🥚 You're an eggstraordinary egg, always ready to take on challenges with sunny-side up optimism. Pressure is your secret ingredient for success, and obstacles are just opportunities in disguise. Your motto? 'Roll with it, don't scramble!'"
	}
	if (total > 0) {
		result.innerText = "a potato"
		description.innerText = "Well, butter my spuds! 🥔 You're a mashed potato marvel, and pressure just turns you into a mash-tastrophe. It's not that you can't handle challenges; you just prefer to mash them out in your own time. Remember, life is like mashed potatoes – lumpy but full of buttery goodness."
	}
	if (total == 0) {
		result.innerText = "an egg-tato"
		description.innerText = "Well, look at you, the perfect blend of eggstraordinary and mashed potato marvel! 🍠🥚 You're an ego-tato dynamo, balancing the sunny-side up optimism of an egg with the mashed marvel resilience of a spud. Under pressure, you're neither fried nor mashed; you're a fry-mash fusion! Life might throw curveballs, but you juggle them like a pro, creating a recipe for success that's both eggs-traordinary and spud-tacular. Keep walking the eggshell-potato line! 🎉"
	}
});

const nextStep = () => {
	CURRENT_STEP = CURRENT_STEP < NUM_STEPS ? CURRENT_STEP + 1 : 1;
	const sections = document.querySelectorAll("[data-step]");
	sections.forEach(section => {
		section.classList.add("hidden");
	})
	const currentSection = document.querySelector(`[data-step="${CURRENT_STEP}"]`);
	currentSection.classList.remove("hidden");
}

const nextBtns = document.querySelectorAll(".next-btn");
nextBtns.forEach(btn => {
	btn.addEventListener("click", nextStep)
});
