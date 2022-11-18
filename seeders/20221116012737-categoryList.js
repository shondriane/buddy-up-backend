'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		const categories = [
			{
				name: 'DRINKS',
				image: 'https://www.talech.com/blog/wp-content/uploads/2020/01/shutterstock_167718563.jpg',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				name: 'OUTDOORS',
				image: 'https://i.imgur.com/CZo1dMB.jpeg',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				name: 'MUSIC',
				image: 'https://cdn.ceoworld.biz/wp-content/uploads/2021/12/concert-crowd.jpg',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				name: 'FOOD',
				image: 'https://media-cdn.tripadvisor.com/media/photo-s/17/f5/39/f7/fooood-at-the-food-department.jpg',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				name: 'ART',
				image: 'https://imgs.6sqft.com/wp-content/uploads/2021/03/02120038/Immersive-Van-Gogh-Chicago-7-Photo-Credit-Michael-Brosilow..jpg',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				name: 'VOLUNTEER',
				image: 'https://pleasantridgepta.files.wordpress.com/2014/09/img_1160.png',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				name: 'THEATER',
				image: 'https://live.staticflickr.com/8638/16728668742_cd472db381_b.jpg',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				name: 'POPUP',
				image: 'https://durhamcentralpark.org/content/uploads/northhillspopupfinals-5.jpg',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				name: 'SPORT',
				image: 'https://www.eventbrite.com/blog/wp-content/uploads/2022/09/jannes-glas-0NaQQsLWLkA-unsplash-768x443.jpg',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				name: 'WELLNESS',
				image: 'https://storage.googleapis.com/curateur-cms/media/2022/03/3eceef2c-sixty-wellness-event-group-2.jpg',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				name: 'COMEDY',
				image: 'https://bocablackbox.showare.com/uplimage/ComedyShow_PromoPic.jpg',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				name: 'BRUNCH',
				image: 'https://media.newyorker.com/photos/5af0927a5e2f1d21c10077cc/16:9/w_2991,h_1682,c_limit/CM_brunch_hi_02.jpg',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				name: 'FASHION',
				image: 'https://assets.palmspringslife.com/wp-content/uploads/2022/03/17192610/fashion-week-el-paseo-2022.jpg',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				name: 'PARTY',
				image: 'https://collegian.csufresno.edu/wp-content/uploads/2018/01/518090350.jpg',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				name: 'RELIGIOUS',
				image: 'https://media.istockphoto.com/id/1265115237/photo/women-raise-their-hands-to-ask-for-blessing-from-god.jpg?s=612x612&w=0&k=20&c=WOXroeLf4eUlJG9UJxfsV_zEkxGzOuBd2_R1KhN5bIU=',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				name: 'SIGHTSEEING',
				image: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/cf/e5/cb.jpg',
				createdAt: new Date(),
				updatedAt: new Date()
			}
		];
		await queryInterface.bulkInsert('categories', categories);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete('categories');
	}
};
