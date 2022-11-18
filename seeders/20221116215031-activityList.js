'use strict';
const falso = require('@ngneat/falso');
const { User, Category } = require('../models');

/** @type {import('sequelize-cli').Migration} */

module.exports = {
	async up(queryInterface, Sequelize) {
		const users = await User.findAll({ raw: true });

		const activityList = [
			{
				categoryId: 1,
				userId: users[Math.floor(Math.random() * users.length)].id,
				name: 'Rockin the Country @ Tara Bar and Grill',
				description:
					"Come out for a wild night with your gals and enjoy our live band starting at 8pm. Can't wait to you guys. ",
				streetAddress: '349 Bandall Ave',
				city: 'New York',
				state: 'New York',
				zipCode: 11040,
				country: 'US',
				date: falso.randFutureDate(),
				image: 'https://pyxis.nymag.com/v1/imgs/842/fe5/2fccfd3b8ad9a0b12b50a58be059d7e657-best-live-music-bar-skinny-dennis.2x.h473.w710.jpg',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				categoryId: 3,
				userId: users[Math.floor(Math.random() * users.length)].id,
				name: 'Rockin the Country @ Tara Bar and Grill',
				description:
					"Come out for a wild night with your gals and enjoy our live band starting at 8pm. Can't wait to you guys. ",
				streetAddress: '349 Bandall Ave',
				city: 'New York',
				state: 'New York',
				zipCode: 11040,
				country: 'US',
				date: falso.randFutureDate(),
				image: 'https://pyxis.nymag.com/v1/imgs/842/fe5/2fccfd3b8ad9a0b12b50a58be059d7e657-best-live-music-bar-skinny-dennis.2x.h473.w710.jpg',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				categoryId: 1,
				userId: users[Math.floor(Math.random() * users.length)].id,
				name: 'Clover Club',
				description:
					'We are finally reopening after extensive remodeling. There will be multiple specials going on throughout the night on drinks and food. ',
				streetAddress: '189 Randoll Ave',
				city: 'Brooklyn',
				state: 'New York',
				zipCode: 11040,
				country: 'US',
				date: falso.randFutureDate(),
				image: 'https://assets-prd.punchdrink.com/wp-content/uploads/2019/04/Article3-Decibel-Japanese-Sake-Bar-East-Village-NYC.jpg',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				categoryId: 4,
				userId: users[Math.floor(Math.random() * users.length)].id,
				name: 'Clover Club',
				description:
					'We are finally reopening after extensive remodeling. There will be multiple specials going on throughout the night on drinks and food. ',
				streetAddress: '189 Randoll Ave',
				city: 'Brooklyn',
				state: 'New York',
				zipCode: 11040,
				country: 'US',
				date: falso.randFutureDate(),
				image: 'https://assets-prd.punchdrink.com/wp-content/uploads/2019/04/Article3-Decibel-Japanese-Sake-Bar-East-Village-NYC.jpg',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				categoryId: 1,
				userId: users[Math.floor(Math.random() * users.length)].id,
				name: 'Bitter & Twisted',
				description:
					"We'll be hosting our first ever ladies night. 1/2 half drinks and appetizers for all ladies ",
				streetAddress: '53 Main Street',
				city: 'Phoenix',
				state: 'Arizona',
				zipCode: 45157,
				country: 'US',
				date: falso.randFutureDate(),
				image: 'http://cdn.cnn.com/cnnnext/dam/assets/200214124438-07-new-york-oldest-bar-chumleys.jpg',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				categoryId: 4,
				userId: users[Math.floor(Math.random() * users.length)].id,
				name: 'Bitter & Twisted',
				description:
					"We'll be hosting our first ever ladies night. 1/2 half drinks and appetizers for all ladies ",
				streetAddress: '53 Main Street',
				city: 'Phoenix',
				state: 'Arizona',
				zipCode: 45157,
				country: 'US',
				date: falso.randFutureDate(),
				image: 'http://cdn.cnn.com/cnnnext/dam/assets/200214124438-07-new-york-oldest-bar-chumleys.jpg',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				categoryId: 1,
				userId: users[Math.floor(Math.random() * users.length)].id,
				name: 'Cloakroom Bar',
				description:
					"Want to experience something different? Then c'mon in throught the candy shop backdoor to experience a talented and creative bartender who will craft a sprecial free drink for you based on the vibes he gets off of you. We promise it will be a night your group will remember for a lifetime.",
				streetAddress: '921-48 Carien Street',
				city: 'Miami',
				state: 'Florida',
				zipCode: 20859,
				country: 'US',
				date: falso.randFutureDate(),
				image: 'https://media.cntraveler.com/photos/5a70ffe9ebe8d741b88f45d7/16:9/w_2560,c_limit/Del-Monte-Speakeasy__2018unspecified-1.jpg',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				categoryId: 1,
				userId: users[Math.floor(Math.random() * users.length)].id,
				name: 'Julep Bar',
				description:
					'It might not be Halloween but we are hosting a costume night. Everyone in a costume will get a ticket upon entering for a free drink at the bar.',
				streetAddress: '657-80 Tillary Street',
				city: 'Houston',
				state: 'Texas',
				zipCode: 46903,
				country: 'US',
				date: falso.randFutureDate(),
				image: 'https://previews.123rf.com/images/vadimgozhda/vadimgozhda1810/vadimgozhda181003321/110089448-bartender-in-halloween-costume-making-cocktail-group-of-young-people-wearing-costumes-standing-nex-t.jpg',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				categoryId: 4,
				userId: users[Math.floor(Math.random() * users.length)].id,
				name: 'Bar Mordecai',
				description:
					"C'mon by for a specially tailored menu by a michelin star chef. Come in to find out which chef!",
				streetAddress: '670 Delante Ave',
				city: 'Toronto',
				state: 'Ontario',
				zipCode: 56876,
				country: 'Canada',
				date: falso.randFutureDate(),
				image: 'https://d3h1lg3ksw6i6b.cloudfront.net/media/image/2021/07/08/c757d24db5884454ad98ce963383355e_Alain-Ducasse-Macau.jpg',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				categoryId: 1,
				userId: users[Math.floor(Math.random() * users.length)].id,
				name: 'Teardrop Lounge',
				description:
					'We will be having a live band with beer pong tables and multiple games set up throughout the bars. The first 3 people to enter the bar after opening will recieve free drinks for the rest of the night',
				streetAddress: '689 Sallington Drive',
				city: 'Portland',
				state: 'Oregon',
				zipCode: 65407,
				country: 'US',
				date: falso.randFutureDate(),
				image: 'https://bk.asia-city.com/sites/default/files/u143339/beer_pong_content2.jpg',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				categoryId: 3,
				userId: users[Math.floor(Math.random() * users.length)].id,
				name: 'Teardrop Lounge',
				description:
					'We will be having a live band with beer pong tables and multiple games set up throughout the bars. The first 3 people to enter the bar after opening will recieve free drinks for the rest of the night',
				streetAddress: '689 Sallington Drive',
				city: 'Portland',
				state: 'Oregon',
				zipCode: 65407,
				country: 'US',
				date: falso.randFutureDate(),
				image: 'https://bk.asia-city.com/sites/default/files/u143339/beer_pong_content2.jpg',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				categoryId: 2,
				userId: users[Math.floor(Math.random() * users.length)].id,
				name: 'Bike Through Central Park ',
				description:
					'We will be taking a group of people on a special bike drive through all the popular spots in central park. There will be a few stops on the way to take bathroom breaks and breathtaking photos.',
				streetAddress: '3478 Columbus Circle',
				city: 'New York',
				state: 'New York',
				zipCode: 10001,
				country: 'US',
				date: falso.randFutureDate(),
				image: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/09/c0/2c/b2.jpg',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				categoryId: 16,
				userId: users[Math.floor(Math.random() * users.length)].id,
				name: 'Bike Through Central Park ',
				description:
					'We will be taking a group of people on a special bike drive through all the popular spots in central park. There will be a few stops on the way to take bathroom breaks and breathtaking photos.',
				streetAddress: '3478 Columbus Circle',
				city: 'New York',
				state: 'New York',
				zipCode: 10001,
				country: 'US',
				date: falso.randFutureDate(),
				image: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/09/c0/2c/b2.jpg',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				categoryId: 2,
				userId: users[Math.floor(Math.random() * users.length)].id,
				name: 'Scenic Helicopter Ride over Las Vegas',
				description:
					"Everyone's walked through vegas streets, but not alot of people have seen the top view. We guarantee it's even better than the top view from the tallest building on the strip.",
				streetAddress: '246 Las Vegas Boulevard ',
				city: 'Las Vegas',
				state: 'Nevada',
				zipCode: 56907,
				country: 'US',
				date: falso.randFutureDate(),
				image: 'https://www.maverickhelicopter.com/images/tours/neon-nature/neon-nature-lg13.jpg',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				categoryId: 16,
				userId: users[Math.floor(Math.random() * users.length)].id,
				name: 'Scenic Helicopter Ride over Las Vegas',
				description:
					"Everyone's walked through vegas streets, but not alot of people have seen the top view. We guarantee it's even better than the top view from the tallest building on the strip.",
				streetAddress: '246 Las Vegas Boulevard ',
				city: 'Las Vegas',
				state: 'Nevada',
				zipCode: 56907,
				country: 'US',
				date: falso.randFutureDate(),
				image: 'https://www.maverickhelicopter.com/images/tours/neon-nature/neon-nature-lg13.jpg',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				categoryId: 5,
				userId: users[Math.floor(Math.random() * users.length)].id,
				name: 'Museum of Modern Arts',
				description:
					"Come on in to see art like you've never seen before. We are one of the largest art museums in the world. We offer a collection of modern and contemporary art. Don't forget to get a souvenir for a loved one at the end of your visit.",
				streetAddress: '11 W 53rd Street',
				city: 'New York',
				state: 'New York',
				zipCode: 10001,
				country: 'US',
				date: falso.randFutureDate(),
				image: 'https://www.moma.org/d/p/sa/maximum/moma_renovation_and_expansion.jpg',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				categoryId: 16,
				userId: users[Math.floor(Math.random() * users.length)].id,
				name: 'Museum of Modern Arts',
				description:
					"Come on in to see art like you've never seen before. We are one of the largest art museums in the world. We offer a collection of modern and contemporary art. Don't forget to get a souvenir for a loved one at the end of your visit.",
				streetAddress: '11 W 53rd Street',
				city: 'New York',
				state: 'New York',
				zipCode: 10001,
				country: 'US',
				date: falso.randFutureDate(),
				image: 'https://www.moma.org/d/p/sa/maximum/moma_renovation_and_expansion.jpg',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				categoryId: 5,
				userId: users[Math.floor(Math.random() * users.length)].id,
				name: 'Graffiti Tour around Wynwood',
				description:
					"Walk through the streets of Wynwood and see murals completed by some of Miami's finest.",
				streetAddress: '246 Wynwood Street',
				city: 'Miami',
				state: 'Florida',
				zipCode: 43885,
				country: 'US',
				date: falso.randFutureDate(),
				image: 'https://www.cktravels.com/wp-content/uploads/2020/06/pascal-bernardon-UHCu3qZ-tSQ-unsplash-1150x647.jpg',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				categoryId: 14,
				userId: users[Math.floor(Math.random() * users.length)].id,
				name: "80's Party night",
				description:
					"Let's travel back in time to the 80's and enjoy some retro themed vibes. If you come dressed in an 80's outfit, there will be special tickets at the door for free giveaways.",
				streetAddress: '87 W 8th Street',
				city: 'Bullor',
				state: 'Kansas',
				zipCode: 54553,
				country: 'US',
				date: falso.randFutureDate(),
				image: 'https://mlknxhszpriy.i.optimole.com/w:auto/h:auto/q:mauto/https://praguenightlifeticket.com/wp-content/uploads/sites/17/2019/12/cafe-80s-prague-7.jpg',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				categoryId: 8,
				userId: users[Math.floor(Math.random() * users.length)].id,
				name: 'Rosé Pop Up',
				description:
					"Different vibes in every room. C'mon by and take photos like you've never taken before. It will be the experience of a lifetime. There will be special mocktails in various rooms",
				streetAddress: '34 E 93 Ave',
				city: 'New Hyde Park',
				state: 'NY',
				zipCode: 11040,
				country: 'US',
				date: falso.randFutureDate(),
				image: 'https://parade.com/.image/t_share/MTkwNTgwMzIwNzYwNTA1NDY5/rose-mansion-4-ftr.jpg',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				categoryId: 8,
				userId: users[Math.floor(Math.random() * users.length)].id,
				name: 'Christmas Stalls',
				description:
					'It might not be Christmas anymore, but why not have one more night of Christmas vibe. Everyone gets sad when the holliday season ends, but we are here to give you a night to enjoy Christmas vibes again. Walk through Bryant Park and experience multiple stalls selling various different holiday treats. You can also buy the ice skating tickets here too!',
				streetAddress: '45 W 34th Street',
				city: 'New York',
				state: 'New York',
				zipCode: 10001,
				country: 'US',
				date: falso.randFutureDate(),
				image: 'https://theculturetrip.com/wp-content/uploads/2018/03/2035321.jpg',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				categoryId: 2,
				userId: users[Math.floor(Math.random() * users.length)].id,
				name: 'Christmas Stalls',
				description:
					'It might not be Christmas anymore, but why not have one more night of Christmas vibe. Everyone gets sad when the holliday season ends, but we are here to give you a night to enjoy Christmas vibes again. Walk through Bryant Park and experience multiple stalls selling various different holiday treats. You can also buy the ice skating tickets here too!',
				streetAddress: '45 W 34th Street',
				city: 'New York',
				state: 'New York',
				zipCode: 10001,
				country: 'US',
				date: falso.randFutureDate(),
				image: 'https://theculturetrip.com/wp-content/uploads/2018/03/2035321.jpg',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				categoryId: 10,
				userId: users[Math.floor(Math.random() * users.length)].id,
				name: 'Hot Yoga',
				description:
					"Enjoy a private yoga session in 100 degrees and high humidity level. It'll be an experience you won't forget!",
				streetAddress: '23 Jersey Ave',
				city: 'Jersey City',
				state: 'New Jersey',
				zipCode: 25806,
				country: 'US',
				date: falso.randFutureDate(),
				image: 'https://hips.hearstapps.com/hmg-prod/images/group-of-young-sporty-people-in-balasana-pose-royalty-free-image-1570547639.jpg',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				categoryId: 10,
				userId: users[Math.floor(Math.random() * users.length)].id,
				name: 'Wellness Retreat',
				description:
					'Enjoy a weekend of spa and meditation. Leave feeling like a brand new self.',
				streetAddress: '6542 Bandall Street',
				city: 'Columbus',
				state: 'Ohio',
				zipCode: 34067,
				country: 'US',
				date: falso.randFutureDate(),
				image: 'https://originslodge.com/wp-content/uploads/2022/06/cover_video.jpg',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				categoryId: 6,
				userId: users[Math.floor(Math.random() * users.length)].id,
				name: 'PB & J for the HOMELESS',
				description:
					"If you have spare hands, c'mon by and help us assemble peanut butter and jelly sandwiches to distribute to the homeless. We choose a different location each time, so we won't know which location we are going till later that evening.",
				streetAddress: '430 Sunset Blvd',
				city: 'Los Angeles',
				state: 'California',
				zipCode: 53843,
				country: 'US',
				date: falso.randFutureDate(),
				image: 'https://www.tampabayparenting.com/wp-content/uploads/2019/12/CD8B257D-7341-4E53-86D2-0412390F89BC.jpeg',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				categoryId: 7,
				userId: users[Math.floor(Math.random() * users.length)].id,
				name: 'Charlie in the Chocolate Factory at Bryant Park',
				description:
					"Projectors will be set up, popcorn and drinks will be at the concession stand, and blankets all around the lawn to sit on. C'mon by and enjoy a nice movie with some great company.",
				streetAddress: '11 W 34th Street',
				city: 'New York',
				state: 'New York',
				zipCode: 10001,
				country: 'US',
				date: falso.randFutureDate(),
				image: 'https://www.visitphilly.com/wp-content/uploads/2021/06/Movies_Night_at_Clark_Park_PhotobyBenTran-courtesy-UCD_2200vp.jpg',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				categoryId: 2,
				userId: users[Math.floor(Math.random() * users.length)].id,
				name: 'Charlie in the Chocolate Factory at Bryant Park',
				description:
					"Projectors will be set up, popcorn and drinks will be at the concession stand, and blankets all around the lawn to sit on. C'mon by and enjoy a nice movie with some great company.",
				streetAddress: '11 W 34th Street',
				city: 'New York',
				state: 'New York',
				zipCode: 10001,
				country: 'US',
				date: falso.randFutureDate(),
				image: 'https://www.visitphilly.com/wp-content/uploads/2021/06/Movies_Night_at_Clark_Park_PhotobyBenTran-courtesy-UCD_2200vp.jpg',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				categoryId: 7,
				userId: users[Math.floor(Math.random() * users.length)].id,
				name: 'Boston Celtics v Phoenix Suns on the lawn',
				description:
					"If you were not able to get tickets to the actual game, come by and watch the game on a 20' projector! BYOB, so come prepared. It'll definitely be better than watching it on a couch.",
				streetAddress: '237 Relado Steet',
				city: 'Carriway',
				state: 'Kansas',
				zipCode: 34374,
				country: 'US',
				date: falso.randFutureDate(),
				image: 'https://www.nbcsports.com/sites/rsnunited/files/styles/article_hero_image/public/archive/assets_article/boston/2017/12/02/stream-celtics-suns.jpg',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				categoryId: 9,
				userId: users[Math.floor(Math.random() * users.length)].id,
				name: 'Boston Celtics v Phoenix Suns on the lawn',
				description:
					"If you were not able to get tickets to the actual game, come by and watch the game on a 20' projector! BYOB, so come prepared. It'll definitely be better than watching it on a couch.",
				streetAddress: '237 Relado Steet',
				city: 'Carriway',
				state: 'Kansas',
				zipCode: 34374,
				country: 'US',
				date: falso.randFutureDate(),
				image: 'https://www.nbcsports.com/sites/rsnunited/files/styles/article_hero_image/public/archive/assets_article/boston/2017/12/02/stream-celtics-suns.jpg',
				createdAt: new Date(),
				updatedAt: new Date()
			}
		];
		await queryInterface.bulkInsert('activities', activityList);
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete('activities');
	}
};
