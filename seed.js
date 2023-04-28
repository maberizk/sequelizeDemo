const { db, Driver, Car, Passenger, Ride } = require("./db");

async function syncDB() {
	try {
		await db.sync({ force: true });

		const firstDriver = await Driver.create({
			name: "Leorio",
			rating: [4, 5, 2, 4, 5, 3],
		});

		const secondDriver = await Driver.create({
			name: "Hisoka",
			rating: [5, 5, 5, 5, 5],
		});

		await Driver.create({
			name: "Melody",
			rating: [1, 1, 1],
		});

		const firstPassenger = await Passenger.create({
			name: "Kurapika",
		});

		const secondPassenger = await Passenger.create({
			name: "Gon",
		});

		const thirdPassenger = await Passenger.create({
			name: "Killua",
		});

		await Ride.create({
			start: "1292 Rodeo Parkway, Washington DC",
			end: "100 Lucky Road, Boston",
		});

		await Ride.create({
			start: "99 Maple Way, Vermont",
			end: "4 Rocky Road, Vermont",
		});
	} catch (err) {
		console.error(err);
	}
}
syncDB();
