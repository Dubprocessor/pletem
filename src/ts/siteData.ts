interface SiteData {
	prices: {
		tabs: object;
	}
	testimonials: {
		autors: {
			[key: string]: string[];
		}
	}
	faq: {
		accordion: object
	}
	
}
export const siteData: SiteData = {
	prices: {
		tabs: {
			['Формирование цен']: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tincidunt pellentesque lorem,
            id suscipit dolor rutrum id. Morbi facilisis porta volutpat. Fusce adipiscing, mauris quis
            congue tincidunt, sapien purus suscipit odio, quis dictum odio tortor in sem. Ut sit amet
            libero nec orci mattis fringilla. Praesent eu ipsum in sapien tincidunt molestie sed ut
            magna. Nam accumsan dui at orci rhoncus pharetra tincidunt elit ullamcorper. Sed ac mauris
            ipsum. Nullam imperdiet sapien id purus pretium id aliquam mi ullamcorper.`,
			['Наращивание волос']: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tincidunt pellentesque lorem,
            id suscipit dolor rutrum id. Morbi facilisis porta volutpat. Fusce adipiscing, mauris quis
            congue tincidunt, sapien purus suscipit odio, quis dictum odio tortor in sem. Ut sit amet
            libero nec orci mattis fringilla. Praesent eu ipsum in sapien tincidunt molestie sed ut
            magna. Nam accumsan dui at orci rhoncus pharetra tincidunt elit ullamcorper. Sed ac mauris
            ipsum. Nullam imperdiet sapien id purus pretium id aliquam mi ullamcorper.`,
			['Классические косички']: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tincidunt pellentesque lorem,
            id suscipit dolor rutrum id. Morbi facilisis porta volutpat. Fusce adipiscing, mauris quis
            congue tincidunt, sapien purus suscipit odio, quis dictum odio tortor in sem. Ut sit amet
            libero nec orci mattis fringilla. Praesent eu ipsum in sapien tincidunt molestie sed ut
            magna. Nam accumsan dui at orci rhoncus pharetra tincidunt elit ullamcorper. Sed ac mauris
            ipsum. Nullam imperdiet sapien id purus pretium id aliquam mi ullamcorper.`,
			['Французские косички']: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tincidunt pellentesque lorem,
            id suscipit dolor rutrum id. Morbi facilisis porta volutpat. Fusce adipiscing, mauris quis
            congue tincidunt, sapien purus suscipit odio, quis dictum odio tortor in sem. Ut sit amet
            libero nec orci mattis fringilla. Praesent eu ipsum in sapien tincidunt molestie sed ut
            magna. Nam accumsan dui at orci rhoncus pharetra tincidunt elit ullamcorper. Sed ac mauris
            ipsum. Nullam imperdiet sapien id purus pretium id aliquam mi ullamcorper.`
		}
	},
	testimonials: {
		autors: {
			['Мария']: [
				'../../assets/img/testimonials/face1.jpg',
				'https://vk.com/',
				`Я первый раз плела косички, и очень боялась. Ведь первый опыт имеет большое значение.
                Влюбилась в эту прическу. Все было очень аккуратно, и естественно.Очень большой выбор
                материалов и самой не надо было никуда ехать. Марина специалист своего дела, и очень хороший
                человек. Это важно когда контактировать с мастером нужно не 15 минут.`
			],
			['Хамиль']: [
				'../../assets/img/testimonials/hamil250-r1.png',
				'https://instagram.com/',
				`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tincidunt pellentesque lorem,
                id suscipit dolor rutrum id. Morbi facilisis porta volutpat. Fusce adipiscing, mauris quis
                congue tincidunt, sapien purus suscipit odio, quis dictum odio tortor in sem. Ut sit amet
                libero nec orci mattis fringilla. Praesent eu ipsum in sapien tincidunt molestie sed ut
                magna. Nam accumsan dui at orci rhoncus pharetra tincidunt elit ullamcorper. Sed ac mauris
                ipsum. Nullam imperdiet sapien id purus pretium id aliquam mi ullamcorper.`
			],
			['Ксения']: [
				'../../assets/img/testimonials/ksusha250.jpg',
				'https://vk.com/',
				`Хочу поблагодарить мастера Марину за шикарные косички! Имея опыт заплетения у другого
                мастера, Марина - просто профессионал своего дела. Косички мягкие, легкие и аккуратные.
                Держатся хорошо и долго. Спереди первый ряд косичек смотрится просто великолепно. Безумна
                довольна своей причёской, и ещё не раз повторю.`
			]
		}
	},
	faq: {
		accordion:{
			['Сколько времени уходит на заплетение?']: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tincidunt pellentesque lorem, id suscipit dolor rutrum
            id. Morbi facilisis porta volutpat. Fusce adipiscing, mauris quis congue tincidunt, sapien purus suscipit odio,
			quis dictum odio tortor in sem. Ut sit amet libero nec orci mattis fringilla.`,
			['Как долго держится прическа?']: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tincidunt pellentesque lorem, id suscipit dolor rutrum
            id. Morbi facilisis porta volutpat. Fusce adipiscing, mauris quis congue tincidunt, sapien purus suscipit odio,
			quis dictum odio tortor in sem. Ut sit amet libero nec orci mattis fringilla.`,
			['Как ухаживать за прической?']: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tincidunt pellentesque lorem, id suscipit dolor rutrum
            id. Morbi facilisis porta volutpat. Fusce adipiscing, mauris quis congue tincidunt, sapien purus suscipit odio,
			quis dictum odio tortor in sem. Ut sit amet libero nec orci mattis fringilla.`,
			['Не повредит ли это мои волосы?']: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tincidunt pellentesque lorem, id suscipit dolor rutrum
            id. Morbi facilisis porta volutpat. Fusce adipiscing, mauris quis congue tincidunt, sapien purus suscipit odio,
			quis dictum odio tortor in sem. Ut sit amet libero nec orci mattis fringilla.`,
		}
	}
};
