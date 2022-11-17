'use strict'
const bcrypt = require('bcrypt')
const { hashPassword } = require('../middleware/index')
require('dotenv').config()
const SALT_ROUNDS = parseInt(process.env.SALT_ROUNDS)

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const generateFakePassword = async () => {
      const fakePassword = await hashPassword('hello')
      console.log(fakePassword)
      return fakePassword
    }

    const fakePassword = await hashPassword('hello')
    const userList = [
      {
        firstName: 'Jay',
        lastName: 'Smith',
        username: 'CoolSmith',
        passwordDigest: fakePassword,
        email: 'jay@smith.com',
        phoneNumber: '(145) 234- 2385',
        age: 32,
        profilePicture:
          'https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?cs=srgb&dl=pexels-suliman-sallehi-1704488.jpg&fm=jpg',
        about:
          'On a day off, I enjoy going out and taking photos of anything that captures my eye. Anyone is welcome to tag along',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Michael',
        lastName: 'Johnson',
        username: 'johnnyboy',
        passwordDigest: fakePassword,
        email: 'michael@johnson.com',
        phoneNumber: '(347) 126- 7623',
        age: 24,
        profilePicture:
          'https://st2.depositphotos.com/6230312/10876/i/600/depositphotos_108764266-stock-photo-young-man-portrait-20-year.jpg',
        about:
          'Well, lets just say that my friends never want to partake in a outdoor activity! If anyone needs a friend for hiking, biking, picnicking, or anything, im always down!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Terry',
        lastName: 'Carter',
        username: 'terrorcarter',
        passwordDigest: fakePassword,
        email: 'terry@carter.com',
        phoneNumber: '(239) 521-1609',
        age: 34,
        profilePicture:
          'https://www.thebusinesswomanmedia.com/wp-content/uploads/2021/06/pexels-kampus-production-7289728-360x220.jpg',
        about: 'New to town. I would love some company in exploring the area',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Ava',
        lastName: 'Linden',
        username: 'ava91',
        passwordDigest: fakePassword,
        email: 'ava@linden.com',
        phoneNumber: '(516) 783-3298',
        age: 31,
        profilePicture:
          'https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/social-media-profile-photos-9.jpg',
        about:
          "Hey guys, I'm here to make more friends. Its getting harder to make new friends as an adult. If you're looking for some company, I'm always looking to meet new people.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'John',
        lastName: 'Smith',
        username: 'smithyjohn92',
        passwordDigest: fakePassword,
        email: 'john@smith.com',
        phoneNumber: '(278) 746-1289',
        age: 30,
        profilePicture:
          'https://image.shutterstock.com/image-photo/handsome-racial-student-copy-space-260nw-1111724084.jpg',
        about:
          "I'm a big time foodie. I like to interact with different people and hear their life stories. If you ever want to catch a quick bite or anything, I'm here.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Franko',
        lastName: 'Thomas',
        username: 'frankoboy',
        passwordDigest: fakePassword,
        email: 'franko@thomas.com',
        phoneNumber: '(569) 235-7677',
        age: 38,
        profilePicture:
          'https://image.shutterstock.com/image-photo/young-businessman-smiling-260nw-364815416.jpg',
        about:
          "I've been dying to go to a rave party but feel a bit out of place going alone. I'm looking for someone to go with.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Angela',
        lastName: 'Suarez',
        username: 'angelasuarez',
        passwordDigest: fakePassword,
        email: 'angela@suarez.com',
        phoneNumber: '(609) 129-5683',
        age: 64,
        profilePicture:
          'https://i.pinimg.com/originals/63/20/08/6320088358134a7afb6e6d07367458d7.jpg',
        about:
          "Well, retirement hit and I'm bored. Looking to fill my days now. Let's do something?",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Jamie',
        lastName: 'Abrahim',
        username: 'bigpimpin996',
        passwordDigest: fakePassword,
        email: 'jamie@abrahim.com',
        phoneNumber: '(348) 532-1934',
        age: 23,
        profilePicture:
          'https://cdn2.f-cdn.com/files/download/38545966/4bce6b.jpg',
        about:
          "Looking for a group of friends to party with. I'm currently enrolled in a very small college which makes it harder to interact with people with different background. ",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Ibrahim',
        lastName: 'Ibanez',
        username: 'jesusBoy',
        passwordDigest: fakePassword,
        email: 'ibrahim@ibanez.com',
        phoneNumber: '(182) 539-2389',
        age: 40,
        profilePicture:
          'https://t3.ftcdn.net/jpg/00/94/13/68/360_F_94136817_Kgd6yk6rYkPf8jrc6IQyLCuB3vranLBy.jpg',
        about:
          "Hi guys, I'm looking to expand my social circle. let me know if you want to come out and make new friends. ",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Jessica',
        lastName: 'Gitzbuerg',
        username: 'gatzby',
        passwordDigest: fakePassword,
        email: 'jessica@gitzbuerg.com',
        phoneNumber: '(126) 450-1976',
        age: 19,
        profilePicture:
          'https://ggsc.s3.amazonaws.com/images/uploads/Teen_by_lockers.jpg',
        about:
          "I've recently moved to this area with my family. I'm looking to find people to interact with. I've found a few events going on locally and would love some company. ",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Ginger',
        lastName: 'Lang',
        username: 'gingerHead',
        passwordDigest: fakePassword,
        email: 'ginger@lang.com',
        phoneNumber: '(386) 497-1865',
        age: 20,
        profilePicture:
          'https://previews.123rf.com/images/sevalv/sevalv1705/sevalv170500051/77337085-portrait-of-young-tender-redhead-teenage-girl-with-healthy-freckled-skin-wearing-grey-top-looking-at.jpg',
        about: '',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Joe',
        lastName: 'Fernandez',
        username: 'joejoeboy',
        passwordDigest: fakePassword,
        email: 'joe@fernandez.com',
        phoneNumber: '(528) 885-1927',
        age: 37,
        profilePicture:
          'https://previews.123rf.com/images/goodluz/goodluz1110/goodluz111000763/10979040-portrait-of-30-year-old-man-looking-at-camera.jpg',
        about:
          "I've made a bunch of friends through this app. If you are looking to expand your social circle, you're more than welcome to join my group.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Lauren',
        lastName: 'Ford',
        username: 'laurenF88',
        passwordDigest: fakePassword,
        email: 'lauren@ford.com',
        phoneNumber: '(204) 297-8740',
        age: 34,
        profilePicture:
          'https://www.tlnt.com/wp-content/uploads/sites/4/2019/04/gig-freelancer-cowork-700x467.jpg',
        about:
          "My husband and I host multiple dinner parties througout the year. We've had the same friends for years. Trying to make new friends now",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Linnea',
        lastName: 'Nelson',
        username: 'nellylin2',
        passwordDigest: fakePassword,
        email: 'linnea@nelson.com',
        phoneNumber: '(298) 258-9838',
        age: 58,
        profilePicture:
          'https://i.pinimg.com/originals/74/d6/6f/74d66f42009c91e615780918b5033b73.jpg',
        about:
          'Alot of my friends have recently moved away. I have a bucketlist of activities I want to do in the next 2 years. Not trying to do it alone, so let me know if you want to help me accomplish my bucketlist.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Lea',
        lastName: 'Jacob',
        username: 'caligirl91',
        passwordDigest: fakePassword,
        email: 'lea@jacob.com',
        phoneNumber: '(938) 997-1299',
        age: 30,
        profilePicture:
          'https://t3.ftcdn.net/jpg/02/72/15/34/360_F_272153464_UcePj25VsdytKWZMFzMKuWxZ5RqVmL97.jpg',
        about:
          'Well my 30th birthday just passed and I realized I want more friends that like to cook. Let me know if you ever are looking for a partner for a cooking class or anything.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Manny',
        lastName: 'libez',
        username: 'mannythebarber',
        passwordDigest: fakePassword,
        email: 'manny@libez.com',
        phoneNumber: '(718) 238-9132',
        age: 59,
        profilePicture:
          'https://image1.masterfile.com/getImage/NzAwLTAyMTI1Mzc2ZW4uMDAwMDAwMDA=AG3qC8/700-02125376en_Masterfile.jpg',
        about:
          "Seems like all of my friends have started to move. I'm looking to make new friends to go out with",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Victoria',
        lastName: 'Thompson',
        username: 'vickygal04',
        passwordDigest: fakePassword,
        email: 'victorial@thompson.com',
        phoneNumber: '(823) 921-9032',
        age: 18,
        profilePicture:
          'https://fem-eszuskq0bptlfh8awbb.stackpathdns.com/wp-content/uploads/2018/05/Motivating-Teens-Dream-Big-0818.jpg',
        about:
          "Alot of my friends went away for college. I'm here to find someone to go out partying with",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Nicole',
        lastName: 'Thompson',
        username: 'nickythom',
        passwordDigest: fakePassword,
        email: 'nicole@thompson.com',
        phoneNumber: '(923) 892-7723',
        age: 46,
        profilePicture:
          'https://t3.ftcdn.net/jpg/02/50/16/92/360_F_250169262_ctUwoXkVzIMcV7rT0jqcg0kcNOimE8Nh.jpg',
        about:
          'Recently divorced, and trying to do everything I wanted to do before and was not able to for some reason.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Lindsay',
        lastName: 'John',
        username: 'lindsay94',
        passwordDigest: fakePassword,
        email: 'lindsay@john.com',
        phoneNumber: '(237) 742-8912',
        age: 28,
        profilePicture:
          'https://lookout.brightspotcdn.com/dims4/default/4e82961/2147483647/strip/true/crop/3600x2025+0+188/resize/1200x675!/quality/90/?url=http%3A%2F%2Flookout-local-brightspot.s3.amazonaws.com%2F3b%2F11%2F812288f240469b6ba9576295c2f4%2F97a0295.jpg',
        about:
          "Well, all of my friends are married and I'm tired of being the only single one. I'm looking to find some more friends",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Phil',
        lastName: 'Thomas',
        username: 'philT',
        passwordDigest: fakePassword,
        email: 'phil@thomas.com',
        phoneNumber: '(478) 487-4389',
        age: 57,
        profilePicture:
          'https://thumbs.dreamstime.com/b/asian-middle-aged-man-grey-shirt-short-hair-smiling-standing-white-background-196565143.jpg',
        about:
          "Just moved in with my wife. I don't realy have my own friends here. If you're ever looking to watch a game at some sportsbar, I'm here.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Robert',
        lastName: 'Smith',
        username: 'robertS',
        passwordDigest: fakePassword,
        email: 'robert@smith.com',
        phoneNumber: '(244) 434-8932',
        age: 66,
        profilePicture:
          'https://st3.depositphotos.com/1075946/15861/i/600/depositphotos_158618164-stock-photo-senior-man-reading-newspaper.jpg',
        about:
          "I've decided to retire but my wife is still working. Need a friend on weekdays to hang out with. Let's make some plans!",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Mario',
        lastName: 'Garcia',
        username: 'marioG',
        passwordDigest: fakePassword,
        email: 'mario@garcia.com',
        phoneNumber: '(323) 545-3767',
        age: 52,
        profilePicture:
          'https://as2.ftcdn.net/v2/jpg/00/47/49/17/1000_F_47491707_hl9iGZqX1t74Pcn1XRHLgjOwB7Qxm9tJ.jpg',
        about:
          'In search of new friends to go to sports games with. I love football and basketball. Let me know if you ever want to go to a game together.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'James',
        lastName: 'Johnson',
        username: 'jayjay',
        passwordDigest: fakePassword,
        email: 'james@johnson.com',
        phoneNumber: '(789) 293-0384',
        age: 46,
        profilePicture:
          'https://image1.masterfile.com/getImage/NzAwLTAwMzQyMDY1ZW4uMDAwMDAwMDA=AJ0ABX/700-00342065en_Masterfile.jpg',
        about:
          "I have a bucketlist of things I want to do before I turn 50. So far, I have 3 people that are down. I'm looking for 2 more people.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Alex',
        lastName: 'Chang',
        username: 'alexC',
        passwordDigest: fakePassword,
        email: 'alex@chang.com',
        phoneNumber: '(678)383-9123',
        age: 33,
        profilePicture:
          'https://everipedia-storage.s3.amazonaws.com/ProfilePicture/lang_en/bobby-bao/mainphoto__thumb.png',
        about:
          "My baby turned 2 and is finally in daycare now which gives me an entire 6 hours to myself. I thought it would be nice, but now I'm bored and looking to find people to interact with during those hours.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'James',
        lastName: 'Ford',
        username: 'fordJ',
        passwordDigest: fakePassword,
        email: 'james@ford.com',
        phoneNumber: '(428) 438-4378',
        age: 29,
        profilePicture:
          'https://thumbs.dreamstime.com/b/hispanic-man-to-years-old-hippie-appearance-sitting-beach-his-legs-crossed-concept-depression-hispanic-man-to-235975322.jpg',
        about:
          "Spent too many years strictly focusing on education. I'm ready to go out and experience my last year in my 20's. Let's go crazy!",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Nick',
        lastName: 'Hayes',
        username: 'nickH',
        passwordDigest: fakePassword,
        email: 'nick@hayes.com',
        phoneNumber: '(478) 912-4839',
        age: 19,
        profilePicture:
          'https://www.professorshouse.com/wp-content/uploads/2015/03/teenager-142.jpg',
        about:
          'This seems like a nice platform to meet new people and see different activities/events going on nearby.',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]
    await queryInterface.bulkInsert('users', userList)
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {})
  }
}
