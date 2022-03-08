const input = getElementById("age");
const show_div = getElementById("div_show");
show_div.textContent = input;
if (1 < input.value < 12) {
} else if (13 < input.value < 18) {
} else if (19 < input.value < 46) {
} else if (input.value > 46) {
}
