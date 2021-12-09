export default function contarOvejas(ovejas) {
	return ovejas.filter(oveja => {
		const name = oveja.name.toLowerCase();
		return oveja.color === "rojo" && name.includes("n") && name.includes("a")
	});
}