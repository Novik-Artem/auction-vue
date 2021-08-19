import { v4 as uuidv4 } from "uuid";
import clock1 from "../../assets/img/clock1.png";
import clock from "../../assets/img/clock2.png";
import clock3 from "../../assets/img/clock3.png";
import rateDecor1 from "../../assets/img/ratedecor1.png";
import rateDecor2 from "../../assets/img/ratedecor2.png";
//
import lot1 from "../../assets/img/lot1/image.png";
import icon1 from "../../assets/img/lot1/icon.png";
import lot2 from "../../assets/img/lot2/image.png";
import icon2 from "../../assets/img/lot2/icon.png";
import lot3 from "../../assets/img/lot3/image.png";
import icon3 from "../../assets/img/lot3/icon.png";
import lot4 from "../../assets/img/lot4/image.png";
import icon4 from "../../assets/img/lot4/icon.png";
import lot5 from "../../assets/img/lot5/image.png";
import icon5 from "../../assets/img/lot5/icon.png";
import lot6 from "../../assets/img/lot6/image.png";
import icon6 from "../../assets/img/lot6/icon.png";
import lot7 from "../../assets/img/lot7/image.png";
import icon7 from "../../assets/img/lot7/icon.png";
import lot8 from "../../assets/img/lot8/image.png";
import icon8 from "../../assets/img/lot8/icon.png";
import lot9 from "../../assets/img/lot9/image.png";
import icon9 from "../../assets/img/lot9/icon.png";
//
import serviceImg1 from "../../assets/img/1.png";
import serviceImg2 from "../../assets/img/2.png";
import serviceImg3 from "../../assets/img/3.png";
//часы
import clock01 from "../../assets/img/lot1/1.webp";
import clock03 from "../../assets/img/lot1/3.webp";
import clock2 from "../../assets/img/lot1/2.jpg";
import clock4 from "../../assets/img/lot1/4.webp";
import clock5 from "../../assets/img/lot1/5.jpg";
import clock6 from "../../assets/img/lot1/6.webp";
import clock7 from "../../assets/img/lot1/7.webp";
import clock8 from "../../assets/img/lot1/8.webp";
//аксессуары
import akses1 from "../../assets/img/lot2/1.jpg";
import akses2 from "../../assets/img/lot2/2.jpg";
import akses3 from "../../assets/img/lot2/3.jpg";
import akses4 from "../../assets/img/lot2/4.jpg";
import akses5 from "../../assets/img/lot2/5.jpg";
import akses6 from "../../assets/img/lot2/6.jpg";
import akses7 from "../../assets/img/lot2/7.webp";
import akses8 from "../../assets/img/lot2/8.webp";
//одежда и обувь
import clothes1 from "../../assets/img/lot3/1.webp";
import clothes2 from "../../assets/img/lot3/2.webp";
import clothes3 from "../../assets/img/lot3/3.webp";
import clothes4 from "../../assets/img/lot3/4.jpg";
import clothes5 from "../../assets/img/lot3/5.jpg";
import clothes6 from "../../assets/img/lot3/6.webp";
import clothes7 from "../../assets/img/lot3/7.jpg";
import clothes8 from "../../assets/img/lot3/8.jpg";
//ювелирные изделия
import juvelir1 from "../../assets/img/lot4/1.jpg";
import juvelir2 from "../../assets/img/lot4/2.jpg";
import juvelir3 from "../../assets/img/lot4/3.webp";
import juvelir4 from "../../assets/img/lot4/4.jpg";
import juvelir5 from "../../assets/img/lot4/5.jpg";
import juvelir6 from "../../assets/img/lot4/6.webp";
import juvelir7 from "../../assets/img/lot4/7.jpg";
import juvelir8 from "../../assets/img/lot4/8.webp";
import juvelir9 from "../../assets/img/lot4/9.webp";
import juvelir10 from "../../assets/img/lot4/10.jpg";
import juvelir11 from "../../assets/img/lot4/11.jpg";
import juvelir12 from "../../assets/img/lot4/12.jpg";
//домики
import house1 from "../../assets/img/lot5/1.jpg";
import house2 from "../../assets/img/lot5/2.webp";
import house3 from "../../assets/img/lot5/3.webp";
import house4 from "../../assets/img/lot5/4.jpg";
import house5 from "../../assets/img/lot5/5.jpg";
import house6 from "../../assets/img/lot5/6.webp";
import house7 from "../../assets/img/lot5/7.webp";
import house8 from "../../assets/img/lot5/8.webp";
import house9 from "../../assets/img/lot5/9.webp";
import house10 from "../../assets/img/lot5/10.webp";
import house11 from "../../assets/img/lot5/11.webp";
import house12 from "../../assets/img/lot5/12.jpg";
//предметы искусства
import art1 from "../../assets/img/lot6/1.webp";
import art2 from "../../assets/img/lot6/2.webp";
import art3 from "../../assets/img/lot6/3.jpg";
import art4 from "../../assets/img/lot6/4.webp";
import art5 from "../../assets/img/lot6/5.jpg";
import art6 from "../../assets/img/lot6/6.jpg";
import art7 from "../../assets/img/lot6/7.webp";
import art8 from "../../assets/img/lot6/8.jpg";
//автотранспорт и лодки
import car1 from "../../assets/img/lot7/1.jpg";
import car2 from "../../assets/img/lot7/2.jpg";
import car3 from "../../assets/img/lot7/3.jpg";
import car4 from "../../assets/img/lot7/4.jpg";
import car5 from "../../assets/img/lot7/5.webp";
import car6 from "../../assets/img/lot7/6.jpg";
import car7 from "../../assets/img/lot7/7.jpg";
import car8 from "../../assets/img/lot7/8.webp";
//hi-tech
import tech1 from "../../assets/img/lot8/1.jpeg";
import tech2 from "../../assets/img/lot8/2.jpg";
import tech3 from "../../assets/img/lot8/3.jpeg";
import tech4 from "../../assets/img/lot8/4.jpg";
//алкоголь и еда
import alk1 from "../../assets/img/lot9/1.jpg";
import alk2 from "../../assets/img/lot9/2.webp";
import alk3 from "../../assets/img/lot9/3.webp";
import alk4 from "../../assets/img/lot9/4.jpg";
import alk5 from "../../assets/img/lot9/5.jpeg";
import alk6 from "../../assets/img/lot9/6.webp";
import alk7 from "../../assets/img/lot9/7.jpg";
import alk8 from "../../assets/img/lot9/8.webp";
export default {
  state: {
    chosenLot: {},
    chosenLots: "часы",
    boughtLots: [],
    newPrice: null,
    newPricePlus: null,
    auctionLots: [
      {
        id: uuidv4(),
        image: clock1,
        text: "Arnold & Son Worldtimer discovery of antarctica",
        leftDecor: rateDecor1,
        leftRateNumber: 1098,
        rateText: "Текущая ставка",
        price: 18999203,
        rightDecor: rateDecor2,
        rightRateNumber: 75,
        upPrice: false,
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur ipsum facere dolorum? Consectetur molestiae inventore possimus. Unde corporis porro aliquid qui commodi deleniti velit amet, dolor, debitis nulla maximeLorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur ipsum facere dolorum? Consectetur molestiae inventore possimus. Unde corporis porro aliquid qui commodi deleniti velit amet, dolor, debitis nulla maxime",
      },
      {
        id: uuidv4(),
        image: clock,
        text: "Arnold & Son Worldtimer discovery of antarctica",
        leftDecor: rateDecor1,
        leftRateNumber: 1098,
        rateText: "Текущая ставка",
        price: 18999203,
        rightDecor: rateDecor2,
        rightRateNumber: 75,
        upPrice: false,
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur ipsum facere dolorum? Consectetur molestiae inventore possimus. Unde corporis porro aliquid qui commodi deleniti velit amet, dolor, debitis nulla maximeLorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur ipsum facere dolorum? Consectetur molestiae inventore possimus. Unde corporis porro aliquid qui commodi deleniti velit amet, dolor, debitis nulla maxime",
      },
      {
        id: uuidv4(),
        image: clock3,
        text: "Chateau Lafite 1949",
        leftDecor: rateDecor1,
        leftRateNumber: 1098,
        rateText: "Текущая ставка",
        price: 18999203,
        rightDecor: rateDecor2,
        rightRateNumber: 75,
        upPrice: false,
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur ipsum facere dolorum? Consectetur molestiae inventore possimus. Unde corporis porro aliquid qui commodi deleniti velit amet, dolor, debitis nulla maximeLorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur ipsum facere dolorum? Consectetur molestiae inventore possimus. Unde corporis porro aliquid qui commodi deleniti velit amet, dolor, debitis nulla maxime",
      },
    ],
    allLots: [
      {
        id: uuidv4(),
        image: lot1,
        icon: icon1,
        text: "часы",
        lots: [
          {
            id: uuidv4(),
            image: clock01,
            text: "Arnold & Son Worldtimer discovery of antarctica",
            leftDecor: rateDecor1,
            leftRateNumber: 1098,
            rateText: "Текущая ставка",
            price: 18999203,
            rightDecor: rateDecor2,
            rightRateNumber: 75,
            upPrice: false,
            description:
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur ipsum facere dolorum? Consectetur molestiae inventore possimus. Unde corporis porro aliquid qui commodi deleniti velit amet, dolor, debitis nulla maximeLorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur ipsum facere dolorum? Consectetur molestiae inventore possimus. Unde corporis porro aliquid qui commodi deleniti velit amet, dolor, debitis nulla maxime",
          },
          {
            id: uuidv4(),
            image: clock2,
            text: "Arnold & Son Worldtimer discovery of antarctica",
            leftDecor: rateDecor1,
            leftRateNumber: 1098,
            rateText: "Текущая ставка",
            price: 18999203,
            rightDecor: rateDecor2,
            rightRateNumber: 75,
            upPrice: false,
            description:
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur ipsum facere dolorum? Consectetur molestiae inventore possimus. Unde corporis porro aliquid qui commodi deleniti velit amet, dolor, debitis nulla maximeLorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur ipsum facere dolorum? Consectetur molestiae inventore possimus. Unde corporis porro aliquid qui commodi deleniti velit amet, dolor, debitis nulla maxime",
          },
          {
            id: uuidv4(),
            image: clock03,
            text: "Arnold & Son Worldtimer discovery of antarctica",
            leftDecor: rateDecor1,
            leftRateNumber: 1098,
            rateText: "Текущая ставка",
            price: 18999203,
            rightDecor: rateDecor2,
            rightRateNumber: 75,
            upPrice: false,
            description:
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur ipsum facere dolorum? Consectetur molestiae inventore possimus. Unde corporis porro aliquid qui commodi deleniti velit amet, dolor, debitis nulla maximeLorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur ipsum facere dolorum? Consectetur molestiae inventore possimus. Unde corporis porro aliquid qui commodi deleniti velit amet, dolor, debitis nulla maxime",
          },
          {
            id: uuidv4(),
            image: clock4,
            text: "Arnold & Son Worldtimer discovery of antarctica",
            leftDecor: rateDecor1,
            leftRateNumber: 1098,
            rateText: "Текущая ставка",
            price: 18999203,
            rightDecor: rateDecor2,
            rightRateNumber: 75,
            upPrice: false,
            description:
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur ipsum facere dolorum? Consectetur molestiae inventore possimus. Unde corporis porro aliquid qui commodi deleniti velit amet, dolor, debitis nulla maximeLorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur ipsum facere dolorum? Consectetur molestiae inventore possimus. Unde corporis porro aliquid qui commodi deleniti velit amet, dolor, debitis nulla maxime",
          },
          {
            id: uuidv4(),
            image: clock5,
            text: "Arnold & Son Worldtimer discovery of antarctica",
            leftDecor: rateDecor1,
            leftRateNumber: 1098,
            rateText: "Текущая ставка",
            price: 18999203,
            rightDecor: rateDecor2,
            rightRateNumber: 75,
            upPrice: false,
            description:
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur ipsum facere dolorum? Consectetur molestiae inventore possimus. Unde corporis porro aliquid qui commodi deleniti velit amet, dolor, debitis nulla maximeLorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur ipsum facere dolorum? Consectetur molestiae inventore possimus. Unde corporis porro aliquid qui commodi deleniti velit amet, dolor, debitis nulla maxime",
          },
          {
            id: uuidv4(),
            image: clock6,
            text: "Arnold & Son Worldtimer discovery of antarctica",
            leftDecor: rateDecor1,
            leftRateNumber: 1098,
            rateText: "Текущая ставка",
            price: 18999203,
            rightDecor: rateDecor2,
            rightRateNumber: 75,
            upPrice: false,
            description:
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur ipsum facere dolorum? Consectetur molestiae inventore possimus. Unde corporis porro aliquid qui commodi deleniti velit amet, dolor, debitis nulla maximeLorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur ipsum facere dolorum? Consectetur molestiae inventore possimus. Unde corporis porro aliquid qui commodi deleniti velit amet, dolor, debitis nulla maxime",
          },
          {
            id: uuidv4(),
            image: clock7,
            text: "Arnold & Son Worldtimer discovery of antarctica",
            leftDecor: rateDecor1,
            leftRateNumber: 1098,
            rateText: "Текущая ставка",
            price: 18999203,
            rightDecor: rateDecor2,
            rightRateNumber: 75,
            upPrice: false,
            description:
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur ipsum facere dolorum? Consectetur molestiae inventore possimus. Unde corporis porro aliquid qui commodi deleniti velit amet, dolor, debitis nulla maximeLorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur ipsum facere dolorum? Consectetur molestiae inventore possimus. Unde corporis porro aliquid qui commodi deleniti velit amet, dolor, debitis nulla maxime",
          },
          {
            id: uuidv4(),
            image: clock8,
            text: "Arnold & Son Worldtimer discovery of antarctica",
            leftDecor: rateDecor1,
            leftRateNumber: 1098,
            rateText: "Текущая ставка",
            price: 18999203,
            rightDecor: rateDecor2,
            rightRateNumber: 75,
            upPrice: false,
            description:
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur ipsum facere dolorum? Consectetur molestiae inventore possimus. Unde corporis porro aliquid qui commodi deleniti velit amet, dolor, debitis nulla maximeLorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur ipsum facere dolorum? Consectetur molestiae inventore possimus. Unde corporis porro aliquid qui commodi deleniti velit amet, dolor, debitis nulla maxime",
          },
        ],
      },
      {
        id: uuidv4(),
        image: lot2,
        icon: icon2,
        text: "аксессуары",
        lots: [
          {
            id: uuidv4(),
            image: akses1,
            text: "Arnold & Son Worldtimer discovery of antarctica",
            leftDecor: rateDecor1,
            leftRateNumber: 1098,
            rateText: "Текущая ставка",
            price: 18999203,
            rightDecor: rateDecor2,
            rightRateNumber: 75,
            upPrice: false,
            description:
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur ipsum facere dolorum? Consectetur molestiae inventore possimus. Unde corporis porro aliquid qui commodi deleniti velit amet, dolor, debitis nulla maximeLorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur ipsum facere dolorum? Consectetur molestiae inventore possimus. Unde corporis porro aliquid qui commodi deleniti velit amet, dolor, debitis nulla maxime",
          },
          {
            id: uuidv4(),
            image: akses2,
            text: "Arnold & Son Worldtimer discovery of antarctica",
            leftDecor: rateDecor1,
            leftRateNumber: 1098,
            rateText: "Текущая ставка",
            price: 18999203,
            rightDecor: rateDecor2,
            rightRateNumber: 75,
            upPrice: false,
            description:
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur ipsum facere dolorum? Consectetur molestiae inventore possimus. Unde corporis porro aliquid qui commodi deleniti velit amet, dolor, debitis nulla maximeLorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur ipsum facere dolorum? Consectetur molestiae inventore possimus. Unde corporis porro aliquid qui commodi deleniti velit amet, dolor, debitis nulla maxime",
          },
          {
            id: uuidv4(),
            image: akses3,
            text: "Arnold & Son Worldtimer discovery of antarctica",
            leftDecor: rateDecor1,
            leftRateNumber: 1098,
            rateText: "Текущая ставка",
            price: 18999203,
            rightDecor: rateDecor2,
            rightRateNumber: 75,
            upPrice: false,
            description:
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur ipsum facere dolorum? Consectetur molestiae inventore possimus. Unde corporis porro aliquid qui commodi deleniti velit amet, dolor, debitis nulla maximeLorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur ipsum facere dolorum? Consectetur molestiae inventore possimus. Unde corporis porro aliquid qui commodi deleniti velit amet, dolor, debitis nulla maxime",
          },
          {
            id: uuidv4(),
            image: akses4,
            text: "Arnold & Son Worldtimer discovery of antarctica",
            leftDecor: rateDecor1,
            leftRateNumber: 1098,
            rateText: "Текущая ставка",
            price: 18999203,
            rightDecor: rateDecor2,
            rightRateNumber: 75,
            upPrice: false,
            description:
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur ipsum facere dolorum? Consectetur molestiae inventore possimus. Unde corporis porro aliquid qui commodi deleniti velit amet, dolor, debitis nulla maximeLorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur ipsum facere dolorum? Consectetur molestiae inventore possimus. Unde corporis porro aliquid qui commodi deleniti velit amet, dolor, debitis nulla maxime",
          },
          {
            id: uuidv4(),
            image: akses5,
            text: "Arnold & Son Worldtimer discovery of antarctica",
            leftDecor: rateDecor1,
            leftRateNumber: 1098,
            rateText: "Текущая ставка",
            price: 18999203,
            rightDecor: rateDecor2,
            rightRateNumber: 75,
            upPrice: false,
            description:
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur ipsum facere dolorum? Consectetur molestiae inventore possimus. Unde corporis porro aliquid qui commodi deleniti velit amet, dolor, debitis nulla maximeLorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur ipsum facere dolorum? Consectetur molestiae inventore possimus. Unde corporis porro aliquid qui commodi deleniti velit amet, dolor, debitis nulla maxime",
          },
          {
            id: uuidv4(),
            image: akses6,
            text: "Arnold & Son Worldtimer discovery of antarctica",
            leftDecor: rateDecor1,
            leftRateNumber: 1098,
            rateText: "Текущая ставка",
            price: 18999203,
            rightDecor: rateDecor2,
            rightRateNumber: 75,
            upPrice: false,
            description:
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur ipsum facere dolorum? Consectetur molestiae inventore possimus. Unde corporis porro aliquid qui commodi deleniti velit amet, dolor, debitis nulla maximeLorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur ipsum facere dolorum? Consectetur molestiae inventore possimus. Unde corporis porro aliquid qui commodi deleniti velit amet, dolor, debitis nulla maxime",
          },
          {
            id: uuidv4(),
            image: akses7,
            text: "Arnold & Son Worldtimer discovery of antarctica",
            leftDecor: rateDecor1,
            leftRateNumber: 1098,
            rateText: "Текущая ставка",
            price: 18999203,
            rightDecor: rateDecor2,
            rightRateNumber: 75,
            upPrice: false,
            description:
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur ipsum facere dolorum? Consectetur molestiae inventore possimus. Unde corporis porro aliquid qui commodi deleniti velit amet, dolor, debitis nulla maximeLorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur ipsum facere dolorum? Consectetur molestiae inventore possimus. Unde corporis porro aliquid qui commodi deleniti velit amet, dolor, debitis nulla maxime",
          },
          {
            id: uuidv4(),
            image: akses8,
            text: "Arnold & Son Worldtimer discovery of antarctica",
            leftDecor: rateDecor1,
            leftRateNumber: 1098,
            rateText: "Текущая ставка",
            price: 18999203,
            rightDecor: rateDecor2,
            rightRateNumber: 75,
            upPrice: false,
            description:
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur ipsum facere dolorum? Consectetur molestiae inventore possimus. Unde corporis porro aliquid qui commodi deleniti velit amet, dolor, debitis nulla maximeLorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur ipsum facere dolorum? Consectetur molestiae inventore possimus. Unde corporis porro aliquid qui commodi deleniti velit amet, dolor, debitis nulla maxime",
          },
        ],
      },
      {
        id: uuidv4(),
        image: lot3,
        icon: icon3,
        text: "одежда и обувь",
        lots: [
          {
            id: uuidv4(),
            image: clothes1,
            text: "Arnold & Son Worldtimer discovery of antarctica",
            leftDecor: rateDecor1,
            leftRateNumber: 1098,
            rateText: "Текущая ставка",
            price: 18999203,
            rightDecor: rateDecor2,
            rightRateNumber: 75,
            upPrice: false,
            description:
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur ipsum facere dolorum? Consectetur molestiae inventore possimus. Unde corporis porro aliquid qui commodi deleniti velit amet, dolor, debitis nulla maximeLorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur ipsum facere dolorum? Consectetur molestiae inventore possimus. Unde corporis porro aliquid qui commodi deleniti velit amet, dolor, debitis nulla maxime",
          },
          {
            id: uuidv4(),
            image: clothes2,
            text: "Arnold & Son Worldtimer discovery of antarctica",
            leftDecor: rateDecor1,
            leftRateNumber: 1098,
            rateText: "Текущая ставка",
            price: 18999203,
            rightDecor: rateDecor2,
            rightRateNumber: 75,
            upPrice: false,
            description:
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur ipsum facere dolorum? Consectetur molestiae inventore possimus. Unde corporis porro aliquid qui commodi deleniti velit amet, dolor, debitis nulla maximeLorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur ipsum facere dolorum? Consectetur molestiae inventore possimus. Unde corporis porro aliquid qui commodi deleniti velit amet, dolor, debitis nulla maxime",
          },
          {
            id: uuidv4(),
            image: clothes3,
            text: "Arnold & Son Worldtimer discovery of antarctica",
            leftDecor: rateDecor1,
            leftRateNumber: 1098,
            rateText: "Текущая ставка",
            price: 18999203,
            rightDecor: rateDecor2,
            rightRateNumber: 75,
            upPrice: false,
            description:
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur ipsum facere dolorum? Consectetur molestiae inventore possimus. Unde corporis porro aliquid qui commodi deleniti velit amet, dolor, debitis nulla maximeLorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur ipsum facere dolorum? Consectetur molestiae inventore possimus. Unde corporis porro aliquid qui commodi deleniti velit amet, dolor, debitis nulla maxime",
          },
          {
            id: uuidv4(),
            image: clothes4,
            text: "Arnold & Son Worldtimer discovery of antarctica",
            leftDecor: rateDecor1,
            leftRateNumber: 1098,
            rateText: "Текущая ставка",
            price: 18999203,
            rightDecor: rateDecor2,
            rightRateNumber: 75,
            upPrice: false,
            description:
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur ipsum facere dolorum? Consectetur molestiae inventore possimus. Unde corporis porro aliquid qui commodi deleniti velit amet, dolor, debitis nulla maximeLorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur ipsum facere dolorum? Consectetur molestiae inventore possimus. Unde corporis porro aliquid qui commodi deleniti velit amet, dolor, debitis nulla maxime",
          },
          {
            id: uuidv4(),
            image: clothes5,
            text: "Arnold & Son Worldtimer discovery of antarctica",
            leftDecor: rateDecor1,
            leftRateNumber: 1098,
            rateText: "Текущая ставка",
            price: 18999203,
            rightDecor: rateDecor2,
            rightRateNumber: 75,
            upPrice: false,
            description:
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur ipsum facere dolorum? Consectetur molestiae inventore possimus. Unde corporis porro aliquid qui commodi deleniti velit amet, dolor, debitis nulla maximeLorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur ipsum facere dolorum? Consectetur molestiae inventore possimus. Unde corporis porro aliquid qui commodi deleniti velit amet, dolor, debitis nulla maxime",
          },
          {
            id: uuidv4(),
            image: clothes6,
            text: "Arnold & Son Worldtimer discovery of antarctica",
            leftDecor: rateDecor1,
            leftRateNumber: 1098,
            rateText: "Текущая ставка",
            price: 18999203,
            rightDecor: rateDecor2,
            rightRateNumber: 75,
            upPrice: false,
            description:
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur ipsum facere dolorum? Consectetur molestiae inventore possimus. Unde corporis porro aliquid qui commodi deleniti velit amet, dolor, debitis nulla maximeLorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur ipsum facere dolorum? Consectetur molestiae inventore possimus. Unde corporis porro aliquid qui commodi deleniti velit amet, dolor, debitis nulla maxime",
          },
          {
            id: uuidv4(),
            image: clothes7,
            text: "Arnold & Son Worldtimer discovery of antarctica",
            leftDecor: rateDecor1,
            leftRateNumber: 1098,
            rateText: "Текущая ставка",
            price: 18999203,
            rightDecor: rateDecor2,
            rightRateNumber: 75,
            upPrice: false,
            description:
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur ipsum facere dolorum? Consectetur molestiae inventore possimus. Unde corporis porro aliquid qui commodi deleniti velit amet, dolor, debitis nulla maximeLorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur ipsum facere dolorum? Consectetur molestiae inventore possimus. Unde corporis porro aliquid qui commodi deleniti velit amet, dolor, debitis nulla maxime",
          },
          {
            id: uuidv4(),
            image: clothes8,
            text: "Arnold & Son Worldtimer discovery of antarctica",
            leftDecor: rateDecor1,
            leftRateNumber: 1098,
            rateText: "Текущая ставка",
            price: 18999203,
            rightDecor: rateDecor2,
            rightRateNumber: 75,
            upPrice: false,
            description:
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur ipsum facere dolorum? Consectetur molestiae inventore possimus. Unde corporis porro aliquid qui commodi deleniti velit amet, dolor, debitis nulla maximeLorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur ipsum facere dolorum? Consectetur molestiae inventore possimus. Unde corporis porro aliquid qui commodi deleniti velit amet, dolor, debitis nulla maxime",
          },
        ],
      },
      {
        id: uuidv4(),
        image: lot4,
        icon: icon4,
        text: "ювелирные изделия",
        lots: [
          {
            id: uuidv4(),
            image: juvelir1,
            text: "Arnold & Son Worldtimer discovery of antarctica",
            leftDecor: rateDecor1,
            leftRateNumber: 1098,
            rateText: "Текущая ставка",
            price: 18999203,
            rightDecor: rateDecor2,
            rightRateNumber: 75,
            upPrice: false,
            description:
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur ipsum facere dolorum? Consectetur molestiae inventore possimus. Unde corporis porro aliquid qui commodi deleniti velit amet, dolor, debitis nulla maximeLorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur ipsum facere dolorum? Consectetur molestiae inventore possimus. Unde corporis porro aliquid qui commodi deleniti velit amet, dolor, debitis nulla maxime",
          },
          {
            id: uuidv4(),
            image: juvelir2,
            text: "Arnold & Son Worldtimer discovery of antarctica",
            leftDecor: rateDecor1,
            leftRateNumber: 1098,
            rateText: "Текущая ставка",
            price: 18999203,
            rightDecor: rateDecor2,
            rightRateNumber: 75,
            upPrice: false,
            description:
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur ipsum facere dolorum? Consectetur molestiae inventore possimus. Unde corporis porro aliquid qui commodi deleniti velit amet, dolor, debitis nulla maximeLorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur ipsum facere dolorum? Consectetur molestiae inventore possimus. Unde corporis porro aliquid qui commodi deleniti velit amet, dolor, debitis nulla maxime",
          },
          {
            id: uuidv4(),
            image: juvelir3,
            text: "Arnold & Son Worldtimer discovery of antarctica",
            leftDecor: rateDecor1,
            leftRateNumber: 1098,
            rateText: "Текущая ставка",
            price: 18999203,
            rightDecor: rateDecor2,
            rightRateNumber: 75,
            upPrice: false,
            description:
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur ipsum facere dolorum? Consectetur molestiae inventore possimus. Unde corporis porro aliquid qui commodi deleniti velit amet, dolor, debitis nulla maximeLorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur ipsum facere dolorum? Consectetur molestiae inventore possimus. Unde corporis porro aliquid qui commodi deleniti velit amet, dolor, debitis nulla maxime",
          },
          {
            id: uuidv4(),
            image: juvelir4,
            text: "Arnold & Son Worldtimer discovery of antarctica",
            leftDecor: rateDecor1,
            leftRateNumber: 1098,
            rateText: "Текущая ставка",
            price: 18999203,
            rightDecor: rateDecor2,
            rightRateNumber: 75,
            upPrice: false,
            description:
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur ipsum facere dolorum? Consectetur molestiae inventore possimus. Unde corporis porro aliquid qui commodi deleniti velit amet, dolor, debitis nulla maximeLorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur ipsum facere dolorum? Consectetur molestiae inventore possimus. Unde corporis porro aliquid qui commodi deleniti velit amet, dolor, debitis nulla maxime",
          },
          {
            id: uuidv4(),
            image: juvelir5,
            text: "Arnold & Son Worldtimer discovery of antarctica",
            leftDecor: rateDecor1,
            leftRateNumber: 1098,
            rateText: "Текущая ставка",
            price: 18999203,
            rightDecor: rateDecor2,
            rightRateNumber: 75,
            upPrice: false,
            description:
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur ipsum facere dolorum? Consectetur molestiae inventore possimus. Unde corporis porro aliquid qui commodi deleniti velit amet, dolor, debitis nulla maximeLorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur ipsum facere dolorum? Consectetur molestiae inventore possimus. Unde corporis porro aliquid qui commodi deleniti velit amet, dolor, debitis nulla maxime",
          },
          {
            id: uuidv4(),
            image: juvelir6,
            text: "Arnold & Son Worldtimer discovery of antarctica",
            leftDecor: rateDecor1,
            leftRateNumber: 1098,
            rateText: "Текущая ставка",
            price: 18999203,
            rightDecor: rateDecor2,
            rightRateNumber: 75,
            upPrice: false,
            description:
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur ipsum facere dolorum? Consectetur molestiae inventore possimus. Unde corporis porro aliquid qui commodi deleniti velit amet, dolor, debitis nulla maximeLorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur ipsum facere dolorum? Consectetur molestiae inventore possimus. Unde corporis porro aliquid qui commodi deleniti velit amet, dolor, debitis nulla maxime",
          },
          {
            id: uuidv4(),
            image: juvelir7,
            text: "Arnold & Son Worldtimer discovery of antarctica",
            leftDecor: rateDecor1,
            leftRateNumber: 1098,
            rateText: "Текущая ставка",
            price: 18999203,
            rightDecor: rateDecor2,
            rightRateNumber: 75,
            upPrice: false,
            description:
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur ipsum facere dolorum? Consectetur molestiae inventore possimus. Unde corporis porro aliquid qui commodi deleniti velit amet, dolor, debitis nulla maximeLorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur ipsum facere dolorum? Consectetur molestiae inventore possimus. Unde corporis porro aliquid qui commodi deleniti velit amet, dolor, debitis nulla maxime",
          },
          {
            id: uuidv4(),
            image: juvelir8,
            text: "Arnold & Son Worldtimer discovery of antarctica",
            leftDecor: rateDecor1,
            leftRateNumber: 1098,
            rateText: "Текущая ставка",
            price: 18999203,
            rightDecor: rateDecor2,
            rightRateNumber: 75,
            upPrice: false,
            description:
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur ipsum facere dolorum? Consectetur molestiae inventore possimus. Unde corporis porro aliquid qui commodi deleniti velit amet, dolor, debitis nulla maximeLorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur ipsum facere dolorum? Consectetur molestiae inventore possimus. Unde corporis porro aliquid qui commodi deleniti velit amet, dolor, debitis nulla maxime",
          },
          {
            id: uuidv4(),
            image: juvelir9,
            text: "Arnold & Son Worldtimer discovery of antarctica",
            leftDecor: rateDecor1,
            leftRateNumber: 1098,
            rateText: "Текущая ставка",
            price: 18999203,
            rightDecor: rateDecor2,
            rightRateNumber: 75,
            upPrice: false,
            description:
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur ipsum facere dolorum? Consectetur molestiae inventore possimus. Unde corporis porro aliquid qui commodi deleniti velit amet, dolor, debitis nulla maximeLorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur ipsum facere dolorum? Consectetur molestiae inventore possimus. Unde corporis porro aliquid qui commodi deleniti velit amet, dolor, debitis nulla maxime",
          },
          {
            id: uuidv4(),
            image: juvelir10,
            text: "Arnold & Son Worldtimer discovery of antarctica",
            leftDecor: rateDecor1,
            leftRateNumber: 1098,
            rateText: "Текущая ставка",
            price: 18999203,
            rightDecor: rateDecor2,
            rightRateNumber: 75,
            upPrice: false,
            description:
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur ipsum facere dolorum? Consectetur molestiae inventore possimus. Unde corporis porro aliquid qui commodi deleniti velit amet, dolor, debitis nulla maximeLorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur ipsum facere dolorum? Consectetur molestiae inventore possimus. Unde corporis porro aliquid qui commodi deleniti velit amet, dolor, debitis nulla maxime",
          },
          {
            id: uuidv4(),
            image: juvelir11,
            text: "Arnold & Son Worldtimer discovery of antarctica",
            leftDecor: rateDecor1,
            leftRateNumber: 1098,
            rateText: "Текущая ставка",
            price: 18999203,
            rightDecor: rateDecor2,
            rightRateNumber: 75,
            upPrice: false,
            description:
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur ipsum facere dolorum? Consectetur molestiae inventore possimus. Unde corporis porro aliquid qui commodi deleniti velit amet, dolor, debitis nulla maximeLorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur ipsum facere dolorum? Consectetur molestiae inventore possimus. Unde corporis porro aliquid qui commodi deleniti velit amet, dolor, debitis nulla maxime",
          },
          {
            id: uuidv4(),
            image: juvelir12,
            text: "Arnold & Son Worldtimer discovery of antarctica",
            leftDecor: rateDecor1,
            leftRateNumber: 1098,
            rateText: "Текущая ставка",
            price: 18999203,
            rightDecor: rateDecor2,
            rightRateNumber: 75,
            upPrice: false,
            description:
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur ipsum facere dolorum? Consectetur molestiae inventore possimus. Unde corporis porro aliquid qui commodi deleniti velit amet, dolor, debitis nulla maximeLorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur ipsum facere dolorum? Consectetur molestiae inventore possimus. Unde corporis porro aliquid qui commodi deleniti velit amet, dolor, debitis nulla maxime",
          },
        ],
      },
      {
        id: uuidv4(),
        image: lot5,
        icon: icon5,
        text: "недвижимость",
        lots: [
          {
            id: uuidv4(),
            image: house1,
            text: "Arnold & Son Worldtimer discovery of antarctica",
            leftDecor: rateDecor1,
            leftRateNumber: 1098,
            rateText: "Текущая ставка",
            price: 18999203,
            rightDecor: rateDecor2,
            rightRateNumber: 75,
            upPrice: false,
            description:
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur ipsum facere dolorum? Consectetur molestiae inventore possimus. Unde corporis porro aliquid qui commodi deleniti velit amet, dolor, debitis nulla maximeLorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur ipsum facere dolorum? Consectetur molestiae inventore possimus. Unde corporis porro aliquid qui commodi deleniti velit amet, dolor, debitis nulla maxime",
          },
          {
            id: uuidv4(),
            image: house2,
            text: "Arnold & Son Worldtimer discovery of antarctica",
            leftDecor: rateDecor1,
            leftRateNumber: 1098,
            rateText: "Текущая ставка",
            price: 18999203,
            rightDecor: rateDecor2,
            rightRateNumber: 75,
            upPrice: false,
            description:
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur ipsum facere dolorum? Consectetur molestiae inventore possimus. Unde corporis porro aliquid qui commodi deleniti velit amet, dolor, debitis nulla maximeLorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur ipsum facere dolorum? Consectetur molestiae inventore possimus. Unde corporis porro aliquid qui commodi deleniti velit amet, dolor, debitis nulla maxime",
          },
          {
            id: uuidv4(),
            image: house3,
            text: "Arnold & Son Worldtimer discovery of antarctica",
            leftDecor: rateDecor1,
            leftRateNumber: 1098,
            rateText: "Текущая ставка",
            price: 18999203,
            rightDecor: rateDecor2,
            rightRateNumber: 75,
            upPrice: false,
            description:
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur ipsum facere dolorum? Consectetur molestiae inventore possimus. Unde corporis porro aliquid qui commodi deleniti velit amet, dolor, debitis nulla maximeLorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur ipsum facere dolorum? Consectetur molestiae inventore possimus. Unde corporis porro aliquid qui commodi deleniti velit amet, dolor, debitis nulla maxime",
          },
          {
            id: uuidv4(),
            image: house4,
            text: "Arnold & Son Worldtimer discovery of antarctica",
            leftDecor: rateDecor1,
            leftRateNumber: 1098,
            rateText: "Текущая ставка",
            price: 18999203,
            rightDecor: rateDecor2,
            rightRateNumber: 75,
            upPrice: false,
            description:
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur ipsum facere dolorum? Consectetur molestiae inventore possimus. Unde corporis porro aliquid qui commodi deleniti velit amet, dolor, debitis nulla maximeLorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur ipsum facere dolorum? Consectetur molestiae inventore possimus. Unde corporis porro aliquid qui commodi deleniti velit amet, dolor, debitis nulla maxime",
          },
          {
            id: uuidv4(),
            image: house5,
            text: "Arnold & Son Worldtimer discovery of antarctica",
            leftDecor: rateDecor1,
            leftRateNumber: 1098,
            rateText: "Текущая ставка",
            price: 18999203,
            rightDecor: rateDecor2,
            rightRateNumber: 75,
            upPrice: false,
            description:
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur ipsum facere dolorum? Consectetur molestiae inventore possimus. Unde corporis porro aliquid qui commodi deleniti velit amet, dolor, debitis nulla maximeLorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur ipsum facere dolorum? Consectetur molestiae inventore possimus. Unde corporis porro aliquid qui commodi deleniti velit amet, dolor, debitis nulla maxime",
          },
          {
            id: uuidv4(),
            image: house6,
            text: "Arnold & Son Worldtimer discovery of antarctica",
            leftDecor: rateDecor1,
            leftRateNumber: 1098,
            rateText: "Текущая ставка",
            price: 18999203,
            rightDecor: rateDecor2,
            rightRateNumber: 75,
            upPrice: false,
            description:
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur ipsum facere dolorum? Consectetur molestiae inventore possimus. Unde corporis porro aliquid qui commodi deleniti velit amet, dolor, debitis nulla maximeLorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur ipsum facere dolorum? Consectetur molestiae inventore possimus. Unde corporis porro aliquid qui commodi deleniti velit amet, dolor, debitis nulla maxime",
          },
          {
            id: uuidv4(),
            image: house7,
            text: "Arnold & Son Worldtimer discovery of antarctica",
            leftDecor: rateDecor1,
            leftRateNumber: 1098,
            rateText: "Текущая ставка",
            price: 18999203,
            rightDecor: rateDecor2,
            rightRateNumber: 75,
            upPrice: false,
            description:
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur ipsum facere dolorum? Consectetur molestiae inventore possimus. Unde corporis porro aliquid qui commodi deleniti velit amet, dolor, debitis nulla maximeLorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur ipsum facere dolorum? Consectetur molestiae inventore possimus. Unde corporis porro aliquid qui commodi deleniti velit amet, dolor, debitis nulla maxime",
          },
          {
            id: uuidv4(),
            image: house8,
            text: "Arnold & Son Worldtimer discovery of antarctica",
            leftDecor: rateDecor1,
            leftRateNumber: 1098,
            rateText: "Текущая ставка",
            price: 18999203,
            rightDecor: rateDecor2,
            rightRateNumber: 75,
            upPrice: false,
            description:
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur ipsum facere dolorum? Consectetur molestiae inventore possimus. Unde corporis porro aliquid qui commodi deleniti velit amet, dolor, debitis nulla maximeLorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur ipsum facere dolorum? Consectetur molestiae inventore possimus. Unde corporis porro aliquid qui commodi deleniti velit amet, dolor, debitis nulla maxime",
          },
          {
            id: uuidv4(),
            image: house9,
            text: "Arnold & Son Worldtimer discovery of antarctica",
            leftDecor: rateDecor1,
            leftRateNumber: 1098,
            rateText: "Текущая ставка",
            price: 18999203,
            rightDecor: rateDecor2,
            rightRateNumber: 75,
            upPrice: false,
            description:
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur ipsum facere dolorum? Consectetur molestiae inventore possimus. Unde corporis porro aliquid qui commodi deleniti velit amet, dolor, debitis nulla maximeLorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur ipsum facere dolorum? Consectetur molestiae inventore possimus. Unde corporis porro aliquid qui commodi deleniti velit amet, dolor, debitis nulla maxime",
          },
          {
            id: uuidv4(),
            image: house10,
            text: "Arnold & Son Worldtimer discovery of antarctica",
            leftDecor: rateDecor1,
            leftRateNumber: 1098,
            rateText: "Текущая ставка",
            price: 18999203,
            rightDecor: rateDecor2,
            rightRateNumber: 75,
            upPrice: false,
            description:
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur ipsum facere dolorum? Consectetur molestiae inventore possimus. Unde corporis porro aliquid qui commodi deleniti velit amet, dolor, debitis nulla maximeLorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur ipsum facere dolorum? Consectetur molestiae inventore possimus. Unde corporis porro aliquid qui commodi deleniti velit amet, dolor, debitis nulla maxime",
          },
          {
            id: uuidv4(),
            image: house11,
            text: "Arnold & Son Worldtimer discovery of antarctica",
            leftDecor: rateDecor1,
            leftRateNumber: 1098,
            rateText: "Текущая ставка",
            price: 18999203,
            rightDecor: rateDecor2,
            rightRateNumber: 75,
            upPrice: false,
            description:
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur ipsum facere dolorum? Consectetur molestiae inventore possimus. Unde corporis porro aliquid qui commodi deleniti velit amet, dolor, debitis nulla maximeLorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur ipsum facere dolorum? Consectetur molestiae inventore possimus. Unde corporis porro aliquid qui commodi deleniti velit amet, dolor, debitis nulla maxime",
          },
          {
            id: uuidv4(),
            image: house12,
            text: "Arnold & Son Worldtimer discovery of antarctica",
            leftDecor: rateDecor1,
            leftRateNumber: 1098,
            rateText: "Текущая ставка",
            price: 18999203,
            rightDecor: rateDecor2,
            rightRateNumber: 75,
            upPrice: false,
            description:
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur ipsum facere dolorum? Consectetur molestiae inventore possimus. Unde corporis porro aliquid qui commodi deleniti velit amet, dolor, debitis nulla maximeLorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur ipsum facere dolorum? Consectetur molestiae inventore possimus. Unde corporis porro aliquid qui commodi deleniti velit amet, dolor, debitis nulla maxime",
          },
        ],
      },
      {
        id: uuidv4(),
        image: lot6,
        icon: icon6,
        text: "предметы искусства",
        lots: [
          {
            id: uuidv4(),
            image: art1,
            text: "Arnold & Son Worldtimer discovery of antarctica",
            leftDecor: rateDecor1,
            leftRateNumber: 1098,
            rateText: "Текущая ставка",
            price: 18999203,
            rightDecor: rateDecor2,
            rightRateNumber: 75,
            upPrice: false,
            description:
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur ipsum facere dolorum? Consectetur molestiae inventore possimus. Unde corporis porro aliquid qui commodi deleniti velit amet, dolor, debitis nulla maximeLorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur ipsum facere dolorum? Consectetur molestiae inventore possimus. Unde corporis porro aliquid qui commodi deleniti velit amet, dolor, debitis nulla maxime",
          },
          {
            id: uuidv4(),
            image: art2,
            text: "Arnold & Son Worldtimer discovery of antarctica",
            leftDecor: rateDecor1,
            leftRateNumber: 1098,
            rateText: "Текущая ставка",
            price: 18999203,
            rightDecor: rateDecor2,
            rightRateNumber: 75,
            upPrice: false,
            description:
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur ipsum facere dolorum? Consectetur molestiae inventore possimus. Unde corporis porro aliquid qui commodi deleniti velit amet, dolor, debitis nulla maximeLorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur ipsum facere dolorum? Consectetur molestiae inventore possimus. Unde corporis porro aliquid qui commodi deleniti velit amet, dolor, debitis nulla maxime",
          },
          {
            id: uuidv4(),
            image: art3,
            text: "Arnold & Son Worldtimer discovery of antarctica",
            leftDecor: rateDecor1,
            leftRateNumber: 1098,
            rateText: "Текущая ставка",
            price: 18999203,
            rightDecor: rateDecor2,
            rightRateNumber: 75,
            upPrice: false,
            description:
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur ipsum facere dolorum? Consectetur molestiae inventore possimus. Unde corporis porro aliquid qui commodi deleniti velit amet, dolor, debitis nulla maximeLorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur ipsum facere dolorum? Consectetur molestiae inventore possimus. Unde corporis porro aliquid qui commodi deleniti velit amet, dolor, debitis nulla maxime",
          },
          {
            id: uuidv4(),
            image: art4,
            text: "Arnold & Son Worldtimer discovery of antarctica",
            leftDecor: rateDecor1,
            leftRateNumber: 1098,
            rateText: "Текущая ставка",
            price: 18999203,
            rightDecor: rateDecor2,
            rightRateNumber: 75,
            upPrice: false,
            description:
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur ipsum facere dolorum? Consectetur molestiae inventore possimus. Unde corporis porro aliquid qui commodi deleniti velit amet, dolor, debitis nulla maximeLorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur ipsum facere dolorum? Consectetur molestiae inventore possimus. Unde corporis porro aliquid qui commodi deleniti velit amet, dolor, debitis nulla maxime",
          },
          {
            id: uuidv4(),
            image: art5,
            text: "Arnold & Son Worldtimer discovery of antarctica",
            leftDecor: rateDecor1,
            leftRateNumber: 1098,
            rateText: "Текущая ставка",
            price: 18999203,
            rightDecor: rateDecor2,
            rightRateNumber: 75,
            upPrice: false,
            description:
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur ipsum facere dolorum? Consectetur molestiae inventore possimus. Unde corporis porro aliquid qui commodi deleniti velit amet, dolor, debitis nulla maximeLorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur ipsum facere dolorum? Consectetur molestiae inventore possimus. Unde corporis porro aliquid qui commodi deleniti velit amet, dolor, debitis nulla maxime",
          },
          {
            id: uuidv4(),
            image: art6,
            text: "Arnold & Son Worldtimer discovery of antarctica",
            leftDecor: rateDecor1,
            leftRateNumber: 1098,
            rateText: "Текущая ставка",
            price: 18999203,
            rightDecor: rateDecor2,
            rightRateNumber: 75,
            upPrice: false,
            description:
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur ipsum facere dolorum? Consectetur molestiae inventore possimus. Unde corporis porro aliquid qui commodi deleniti velit amet, dolor, debitis nulla maximeLorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur ipsum facere dolorum? Consectetur molestiae inventore possimus. Unde corporis porro aliquid qui commodi deleniti velit amet, dolor, debitis nulla maxime",
          },
          {
            id: uuidv4(),
            image: art7,
            text: "Arnold & Son Worldtimer discovery of antarctica",
            leftDecor: rateDecor1,
            leftRateNumber: 1098,
            rateText: "Текущая ставка",
            price: 18999203,
            rightDecor: rateDecor2,
            rightRateNumber: 75,
            upPrice: false,
            description:
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur ipsum facere dolorum? Consectetur molestiae inventore possimus. Unde corporis porro aliquid qui commodi deleniti velit amet, dolor, debitis nulla maximeLorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur ipsum facere dolorum? Consectetur molestiae inventore possimus. Unde corporis porro aliquid qui commodi deleniti velit amet, dolor, debitis nulla maxime",
          },
          {
            id: uuidv4(),
            image: art8,
            text: "Arnold & Son Worldtimer discovery of antarctica",
            leftDecor: rateDecor1,
            leftRateNumber: 1098,
            rateText: "Текущая ставка",
            price: 18999203,
            rightDecor: rateDecor2,
            rightRateNumber: 75,
            upPrice: false,
            description:
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur ipsum facere dolorum? Consectetur molestiae inventore possimus. Unde corporis porro aliquid qui commodi deleniti velit amet, dolor, debitis nulla maximeLorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur ipsum facere dolorum? Consectetur molestiae inventore possimus. Unde corporis porro aliquid qui commodi deleniti velit amet, dolor, debitis nulla maxime",
          },
        ],
      },
      {
        id: uuidv4(),
        image: lot7,
        icon: icon7,
        text: "автотранспорт и лодки",
        lots: [
          {
            id: uuidv4(),
            image: car1,
            text: "Arnold & Son Worldtimer discovery of antarctica",
            leftDecor: rateDecor1,
            leftRateNumber: 1098,
            rateText: "Текущая ставка",
            price: 18999203,
            rightDecor: rateDecor2,
            rightRateNumber: 75,
            upPrice: false,
            description:
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur ipsum facere dolorum? Consectetur molestiae inventore possimus. Unde corporis porro aliquid qui commodi deleniti velit amet, dolor, debitis nulla maximeLorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur ipsum facere dolorum? Consectetur molestiae inventore possimus. Unde corporis porro aliquid qui commodi deleniti velit amet, dolor, debitis nulla maxime",
          },
          {
            id: uuidv4(),
            image: car2,
            text: "Arnold & Son Worldtimer discovery of antarctica",
            leftDecor: rateDecor1,
            leftRateNumber: 1098,
            rateText: "Текущая ставка",
            price: 18999203,
            rightDecor: rateDecor2,
            rightRateNumber: 75,
            upPrice: false,
            description:
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur ipsum facere dolorum? Consectetur molestiae inventore possimus. Unde corporis porro aliquid qui commodi deleniti velit amet, dolor, debitis nulla maximeLorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur ipsum facere dolorum? Consectetur molestiae inventore possimus. Unde corporis porro aliquid qui commodi deleniti velit amet, dolor, debitis nulla maxime",
          },
          {
            id: uuidv4(),
            image: car3,
            text: "Arnold & Son Worldtimer discovery of antarctica",
            leftDecor: rateDecor1,
            leftRateNumber: 1098,
            rateText: "Текущая ставка",
            price: 18999203,
            rightDecor: rateDecor2,
            rightRateNumber: 75,
            upPrice: false,
            description:
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur ipsum facere dolorum? Consectetur molestiae inventore possimus. Unde corporis porro aliquid qui commodi deleniti velit amet, dolor, debitis nulla maximeLorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur ipsum facere dolorum? Consectetur molestiae inventore possimus. Unde corporis porro aliquid qui commodi deleniti velit amet, dolor, debitis nulla maxime",
          },
          {
            id: uuidv4(),
            image: car4,
            text: "Arnold & Son Worldtimer discovery of antarctica",
            leftDecor: rateDecor1,
            leftRateNumber: 1098,
            rateText: "Текущая ставка",
            price: 18999203,
            rightDecor: rateDecor2,
            rightRateNumber: 75,
            upPrice: false,
            description:
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur ipsum facere dolorum? Consectetur molestiae inventore possimus. Unde corporis porro aliquid qui commodi deleniti velit amet, dolor, debitis nulla maximeLorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur ipsum facere dolorum? Consectetur molestiae inventore possimus. Unde corporis porro aliquid qui commodi deleniti velit amet, dolor, debitis nulla maxime",
          },
          {
            id: uuidv4(),
            image: car5,
            text: "Arnold & Son Worldtimer discovery of antarctica",
            leftDecor: rateDecor1,
            leftRateNumber: 1098,
            rateText: "Текущая ставка",
            price: 18999203,
            rightDecor: rateDecor2,
            rightRateNumber: 75,
            upPrice: false,
            description:
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur ipsum facere dolorum? Consectetur molestiae inventore possimus. Unde corporis porro aliquid qui commodi deleniti velit amet, dolor, debitis nulla maximeLorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur ipsum facere dolorum? Consectetur molestiae inventore possimus. Unde corporis porro aliquid qui commodi deleniti velit amet, dolor, debitis nulla maxime",
          },
          {
            id: uuidv4(),
            image: car6,
            text: "Arnold & Son Worldtimer discovery of antarctica",
            leftDecor: rateDecor1,
            leftRateNumber: 1098,
            rateText: "Текущая ставка",
            price: 18999203,
            rightDecor: rateDecor2,
            rightRateNumber: 75,
            upPrice: false,
            description:
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur ipsum facere dolorum? Consectetur molestiae inventore possimus. Unde corporis porro aliquid qui commodi deleniti velit amet, dolor, debitis nulla maximeLorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur ipsum facere dolorum? Consectetur molestiae inventore possimus. Unde corporis porro aliquid qui commodi deleniti velit amet, dolor, debitis nulla maxime",
          },
          {
            id: uuidv4(),
            image: car7,
            text: "Arnold & Son Worldtimer discovery of antarctica",
            leftDecor: rateDecor1,
            leftRateNumber: 1098,
            rateText: "Текущая ставка",
            price: 18999203,
            rightDecor: rateDecor2,
            rightRateNumber: 75,
            upPrice: false,
            description:
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur ipsum facere dolorum? Consectetur molestiae inventore possimus. Unde corporis porro aliquid qui commodi deleniti velit amet, dolor, debitis nulla maximeLorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur ipsum facere dolorum? Consectetur molestiae inventore possimus. Unde corporis porro aliquid qui commodi deleniti velit amet, dolor, debitis nulla maxime",
          },
          {
            id: uuidv4(),
            image: car8,
            text: "Arnold & Son Worldtimer discovery of antarctica",
            leftDecor: rateDecor1,
            leftRateNumber: 1098,
            rateText: "Текущая ставка",
            price: 18999203,
            rightDecor: rateDecor2,
            rightRateNumber: 75,
            upPrice: false,
            description:
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur ipsum facere dolorum? Consectetur molestiae inventore possimus. Unde corporis porro aliquid qui commodi deleniti velit amet, dolor, debitis nulla maximeLorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur ipsum facere dolorum? Consectetur molestiae inventore possimus. Unde corporis porro aliquid qui commodi deleniti velit amet, dolor, debitis nulla maxime",
          },
        ],
      },
      {
        id: uuidv4(),
        image: lot8,
        icon: icon8,
        text: "Hi-Tech",
        lots: [
          {
            id: uuidv4(),
            image: tech1,
            text: "Arnold & Son Worldtimer discovery of antarctica",
            leftDecor: rateDecor1,
            leftRateNumber: 1098,
            rateText: "Текущая ставка",
            price: 18999203,
            rightDecor: rateDecor2,
            rightRateNumber: 75,
            upPrice: false,
            description:
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur ipsum facere dolorum? Consectetur molestiae inventore possimus. Unde corporis porro aliquid qui commodi deleniti velit amet, dolor, debitis nulla maximeLorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur ipsum facere dolorum? Consectetur molestiae inventore possimus. Unde corporis porro aliquid qui commodi deleniti velit amet, dolor, debitis nulla maxime",
          },
          {
            id: uuidv4(),
            image: tech2,
            text: "Arnold & Son Worldtimer discovery of antarctica",
            leftDecor: rateDecor1,
            leftRateNumber: 1098,
            rateText: "Текущая ставка",
            price: 18999203,
            rightDecor: rateDecor2,
            rightRateNumber: 75,
            upPrice: false,
            description:
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur ipsum facere dolorum? Consectetur molestiae inventore possimus. Unde corporis porro aliquid qui commodi deleniti velit amet, dolor, debitis nulla maximeLorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur ipsum facere dolorum? Consectetur molestiae inventore possimus. Unde corporis porro aliquid qui commodi deleniti velit amet, dolor, debitis nulla maxime",
          },
          {
            id: uuidv4(),
            image: tech3,
            text: "Arnold & Son Worldtimer discovery of antarctica",
            leftDecor: rateDecor1,
            leftRateNumber: 1098,
            rateText: "Текущая ставка",
            price: 18999203,
            rightDecor: rateDecor2,
            rightRateNumber: 75,
            upPrice: false,
            description:
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur ipsum facere dolorum? Consectetur molestiae inventore possimus. Unde corporis porro aliquid qui commodi deleniti velit amet, dolor, debitis nulla maximeLorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur ipsum facere dolorum? Consectetur molestiae inventore possimus. Unde corporis porro aliquid qui commodi deleniti velit amet, dolor, debitis nulla maxime",
          },
          {
            id: uuidv4(),
            image: tech4,
            text: "Arnold & Son Worldtimer discovery of antarctica",
            leftDecor: rateDecor1,
            leftRateNumber: 1098,
            rateText: "Текущая ставка",
            price: 18999203,
            rightDecor: rateDecor2,
            rightRateNumber: 75,
            upPrice: false,
            description:
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur ipsum facere dolorum? Consectetur molestiae inventore possimus. Unde corporis porro aliquid qui commodi deleniti velit amet, dolor, debitis nulla maximeLorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur ipsum facere dolorum? Consectetur molestiae inventore possimus. Unde corporis porro aliquid qui commodi deleniti velit amet, dolor, debitis nulla maxime",
          },
        ],
      },
      {
        id: uuidv4(),
        image: lot9,
        icon: icon9,
        text: "алкоголь и еда",
        lots: [
          {
            id: uuidv4(),
            image: alk1,
            text: "Arnold & Son Worldtimer discovery of antarctica",
            leftDecor: rateDecor1,
            leftRateNumber: 1098,
            rateText: "Текущая ставка",
            price: 18999203,
            rightDecor: rateDecor2,
            rightRateNumber: 75,
            upPrice: false,
            description:
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur ipsum facere dolorum? Consectetur molestiae inventore possimus. Unde corporis porro aliquid qui commodi deleniti velit amet, dolor, debitis nulla maximeLorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur ipsum facere dolorum? Consectetur molestiae inventore possimus. Unde corporis porro aliquid qui commodi deleniti velit amet, dolor, debitis nulla maxime",
          },
          {
            id: uuidv4(),
            image: alk2,
            text: "Arnold & Son Worldtimer discovery of antarctica",
            leftDecor: rateDecor1,
            leftRateNumber: 1098,
            rateText: "Текущая ставка",
            price: 18999203,
            rightDecor: rateDecor2,
            rightRateNumber: 75,
            upPrice: false,
            description:
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur ipsum facere dolorum? Consectetur molestiae inventore possimus. Unde corporis porro aliquid qui commodi deleniti velit amet, dolor, debitis nulla maximeLorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur ipsum facere dolorum? Consectetur molestiae inventore possimus. Unde corporis porro aliquid qui commodi deleniti velit amet, dolor, debitis nulla maxime",
          },
          {
            id: uuidv4(),
            image: alk3,
            text: "Arnold & Son Worldtimer discovery of antarctica",
            leftDecor: rateDecor1,
            leftRateNumber: 1098,
            rateText: "Текущая ставка",
            price: 18999203,
            rightDecor: rateDecor2,
            rightRateNumber: 75,
            upPrice: false,
            description:
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur ipsum facere dolorum? Consectetur molestiae inventore possimus. Unde corporis porro aliquid qui commodi deleniti velit amet, dolor, debitis nulla maximeLorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur ipsum facere dolorum? Consectetur molestiae inventore possimus. Unde corporis porro aliquid qui commodi deleniti velit amet, dolor, debitis nulla maxime",
          },
          {
            id: uuidv4(),
            image: alk4,
            text: "Arnold & Son Worldtimer discovery of antarctica",
            leftDecor: rateDecor1,
            leftRateNumber: 1098,
            rateText: "Текущая ставка",
            price: 18999203,
            rightDecor: rateDecor2,
            rightRateNumber: 75,
            upPrice: false,
            description:
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur ipsum facere dolorum? Consectetur molestiae inventore possimus. Unde corporis porro aliquid qui commodi deleniti velit amet, dolor, debitis nulla maximeLorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur ipsum facere dolorum? Consectetur molestiae inventore possimus. Unde corporis porro aliquid qui commodi deleniti velit amet, dolor, debitis nulla maxime",
          },
          {
            id: uuidv4(),
            image: alk5,
            text: "Arnold & Son Worldtimer discovery of antarctica",
            leftDecor: rateDecor1,
            leftRateNumber: 1098,
            rateText: "Текущая ставка",
            price: 18999203,
            rightDecor: rateDecor2,
            rightRateNumber: 75,
            upPrice: false,
            description:
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur ipsum facere dolorum? Consectetur molestiae inventore possimus. Unde corporis porro aliquid qui commodi deleniti velit amet, dolor, debitis nulla maximeLorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur ipsum facere dolorum? Consectetur molestiae inventore possimus. Unde corporis porro aliquid qui commodi deleniti velit amet, dolor, debitis nulla maxime",
          },
          {
            id: uuidv4(),
            image: alk6,
            text: "Arnold & Son Worldtimer discovery of antarctica",
            leftDecor: rateDecor1,
            leftRateNumber: 1098,
            rateText: "Текущая ставка",
            price: 18999203,
            rightDecor: rateDecor2,
            rightRateNumber: 75,
            upPrice: false,
            description:
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur ipsum facere dolorum? Consectetur molestiae inventore possimus. Unde corporis porro aliquid qui commodi deleniti velit amet, dolor, debitis nulla maximeLorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur ipsum facere dolorum? Consectetur molestiae inventore possimus. Unde corporis porro aliquid qui commodi deleniti velit amet, dolor, debitis nulla maxime",
          },
          {
            id: uuidv4(),
            image: alk7,
            text: "Arnold & Son Worldtimer discovery of antarctica",
            leftDecor: rateDecor1,
            leftRateNumber: 1098,
            rateText: "Текущая ставка",
            price: 18999203,
            rightDecor: rateDecor2,
            rightRateNumber: 75,
            upPrice: false,
            description:
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur ipsum facere dolorum? Consectetur molestiae inventore possimus. Unde corporis porro aliquid qui commodi deleniti velit amet, dolor, debitis nulla maximeLorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur ipsum facere dolorum? Consectetur molestiae inventore possimus. Unde corporis porro aliquid qui commodi deleniti velit amet, dolor, debitis nulla maxime",
          },
          {
            id: uuidv4(),
            image: alk8,
            text: "Arnold & Son Worldtimer discovery of antarctica",
            leftDecor: rateDecor1,
            leftRateNumber: 1098,
            rateText: "Текущая ставка",
            price: 18999203,
            rightDecor: rateDecor2,
            rightRateNumber: 75,
            upPrice: false,
            description:
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur ipsum facere dolorum? Consectetur molestiae inventore possimus. Unde corporis porro aliquid qui commodi deleniti velit amet, dolor, debitis nulla maximeLorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur ipsum facere dolorum? Consectetur molestiae inventore possimus. Unde corporis porro aliquid qui commodi deleniti velit amet, dolor, debitis nulla maxime",
          },
        ],
      },
    ],
    serviceRow: [
      {
        id: uuidv4(),
        image: serviceImg1,
        title: "Экспертная оценка",
        text:
          "Мы собираем эксклюзивную публику и экслюзивные лоты, даем удобный",
        info: "Подробнее",
      },
      {
        id: uuidv4(),
        image: serviceImg2,
        title: "заказ комплектующих",
        text:
          "Мы собираем эксклюзивную публику и экслюзивные лоты, даем удобный",
        info: "Подробнее",
      },
      {
        id: uuidv4(),
        image: serviceImg3,
        title: "ремонт и реставрация",
        text:
          "Мы собираем эксклюзивную публику и экслюзивные лоты, даем удобный",
        info: "Подробнее",
      },
    ],
    newText: "",
    startPrice: null,
    newDesc: "",
    newImage: "",
    categories: [
      {
        id: uuidv4(),
        text: "часы",
      },
      {
        id: uuidv4(),
        text: "аксессуары",
      },
      {
        id: uuidv4(),
        text: "одежда и обувь",
      },
      {
        id: uuidv4(),
        text: "ювелирные изделия",
      },
      {
        id: uuidv4(),
        text: "недвижимость",
      },
      {
        id: uuidv4(),
        text: "предметы искусства",
      },
      {
        id: uuidv4(),
        text: "автотранспорт и лодки",
      },
      {
        id: uuidv4(),
        text: "Hi-Tech",
      },
      {
        id: uuidv4(),
        text: "алкоголь и еда",
      },
    ],
    slides: [
      {
        id: uuidv4(),
        title: "Только эксклюзивные",
        secondTitle: "Лоты под аукцион и свобоДную продажу",
        text:
          "Мы собираем эксклюзивную публику и экслюзивные лоты, даем удобный и автоматизированный сервис по покупке и продаже, а также выставлению лотов на аукцион, предоставляем личные кабинеты, а также оказываем сопутствубщие услуги с продажей редких и дорогих вещей",
      },
      {
        id: uuidv4(),
        title: "Только новые",
        secondTitle: "Какой-то левый текст для отличия",
        text:
          "Мы рады приветствовать вас на уникальной Лакшери аукционе, здесь вы сможете найти достойные для себя лоты. Аукцион по продаже недвижимости во многих развитых странах являюется основным инструментом купли-продажи коммерческой, жилой, и муниципальной недвижимости, в том числе квартир.",
      },
      {
        id: uuidv4(),
        title: "Только популярные",
        secondTitle: "В 2 раза больше текста для отличия",
        text:
          " Уникальной Лакшери аукционе, здесь вы сможете найти Продажа товаров, ценных бумаг, имущества предприятий, произведений искусства и других объектов, которая... ",
      },
    ],
    thisSlide: 0,
    isBurgerOpen: false,
  },
  actions: {},
  getters: {
    getAuctionLots(state) {
      return state.auctionLots;
    },
    getAllLots(state) {
      return state.allLots;
    },
    getServiceRow(state) {
      return state.serviceRow;
    },
    getClockLots(state) {
      return state.allLots[0].lots;
    },
    getAccessoriesLots(state) {
      return state.allLots[1].lots;
    },
    getClothesLots(state) {
      return state.allLots[2].lots;
    },
    getJuvelirLots(state) {
      return state.allLots[3].lots;
    },
    getHousesLots(state) {
      return state.allLots[4].lots;
    },
    getArtLots(state) {
      return state.allLots[5].lots;
    },
    getCarsLots(state) {
      return state.allLots[6].lots;
    },
    getTechLots(state) {
      return state.allLots[7].lots;
    },
    getAlkogolLots(state) {
      return state.allLots[8].lots;
    },
    getChosenLots(state, getters) {
      switch (state.chosenLots) {
        case "часы":
          return getters.getClockLots;
        case "аксессуары":
          return getters.getAccessoriesLots;
        case "одежда и обувь":
          return getters.getClothesLots;
        case "ювелирные изделия":
          return getters.getJuvelirLots;
        case "недвижимость":
          return getters.getHousesLots;
        case "предметы искусства":
          return getters.getArtLots;
        case "автотранспорт и лодки":
          return getters.getCarsLots;
        case "Hi-Tech":
          return getters.getTechLots;
        case "алкоголь и еда":
          return getters.getAlkogolLots;
      }
    },
    getChosenLot(state) {
      return state.chosenLot;
    },
    getBoughtLots(state) {
      return state.boughtLots;
    },
    getCategories(state) {
      return state.categories;
    },
    getSlides(state) {
      return state.slides;
    },
    getThisSlide(state) {
      return state.thisSlide;
    },
    getIsBurgerOpen(state) {
      return state.isBurgerOpen;
    },
  },
  mutations: {
    changeLots(state, text) {
      state.allLots.map((lot) => {
        if (lot.text === text) {
          state.chosenLots = lot.text;
        }
      });
      console.log(state.chosenLots);
    },
    setChosenLot(state, id) {
      state.allLots.map((item) => {
        item.lots.map((lot) => {
          if (lot.id === id) state.chosenLot = lot;
        });
      });
      state.auctionLots.map((lot) => {
        if (lot.id === id) state.chosenLot = lot;
      });
    },
    openUpPrice(state, id) {
      state.allLots.map((item) => {
        item.lots.map((lot) => {
          if (lot.id === id) {
            lot.upPrice = !lot.upPrice;
          }
        });
        state.auctionLots.map((lot) => {
          if (lot.id === id) {
            lot.upPrice = !lot.upPrice;
          }
        });
      });
    },
    changePrice(state, price) {
      price = Number(price);
      state.newPrice = price;
    },
    addNewPrice(state, id) {
      state.allLots.map((item) => {
        item.lots.map((lot) => {
          if (
            lot.id === id &&
            lot.price < state.newPrice &&
            state.newPrice < 999999999
          ) {
            lot.price = state.newPrice;
          } else if (lot.id === id && lot.price > state.newPrice)
            lot.price != state.newPrice;
          else if (lot.id === id && state.newPrice > 999999999) {
            lot.price = "продано";
            state.boughtLots.push(lot);
          }
        });
      });
      state.auctionLots.map((lot) => {
        if (
          lot.id === id &&
          lot.price < state.newPrice &&
          state.newPrice < 999999999
        ) {
          lot.price = state.newPrice;
        } else if (lot.id === id && lot.price > state.newPrice)
          lot.price != state.newPrice;
        else if (lot.id === id && state.newPrice > 999999999) {
          lot.price = "продано";
          state.boughtLots.push(lot);
        }
      });
    },
    changePricePlus(state, pricePlus) {
      pricePlus = Number(pricePlus);
      state.newPricePlus = pricePlus;
    },
    plusPrice(state, id) {
      state.allLots.map((item) => {
        item.lots.map((lot) => {
          if (
            lot.id === id &&
            state.newPricePlus < 999999999 &&
            state.newPricePlus > 0
          ) {
            lot.price = lot.price + state.newPricePlus;
          } else if (lot.id === id && state.newPricePlus > 999999999) {
            lot.price = "продано";
            state.boughtLots.push(lot);
          }
        });
      });
      state.auctionLots.map((lot) => {
        if (
          lot.id === id &&
          state.newPricePlus < 999999999 &&
          state.newPricePlus > 0
        ) {
          lot.price = lot.price + state.newPricePlus;
        } else if (lot.id === id && state.newPricePlus > 999999999) {
          lot.price = "продано";
          state.boughtLots.push(lot);
        }
      });
    },
    addNewText(state, addText) {
      state.newText = addText;
    },
    addNewStartPrice(state, addStartPrice) {
      addStartPrice = Number(addStartPrice);
      state.startPrice = addStartPrice;
    },
    addNewImage(state, addImage) {
      state.newImage = addImage;
    },
    addNewDesc(state, addDesc) {
      state.newDesc = addDesc;
    },
    addNewLot(state, txt) {
      console.log(txt);
      state.allLots.map((item) => {
        if (
          item.text === txt &&
          state.newImage != "" &&
          state.newText != "" &&
          state.startPrice != null
        ) {
          item.lots.push({
            id: uuidv4(),
            image: state.newImage,
            text: state.newText,
            leftDecor: rateDecor1,
            leftRateNumber: 1098,
            rateText: "Текущая ставка",
            price: state.startPrice,
            rightDecor: rateDecor2,
            rightRateNumber: 75,
            upPrice: false,
            description: state.newDesc,
          });
        }
      });
    },
    nextSlide(state) {
      state.thisSlide = state.thisSlide + 1;
      if (state.thisSlide === state.slides.length) {
        state.thisSlide = 0;
      }
    },
    previosSlide(state) {
      state.thisSlide = state.thisSlide - 1;
      if (state.thisSlide === -1) {
        state.thisSlide = state.slides.length - 1;
      }
    },
    openBurger(state) {
      state.isBurgerOpen = !state.isBurgerOpen;
    },
  },
};
