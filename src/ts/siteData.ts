interface SiteData {
  prices: {
    tabs: object;
  };
  testimonials: {
    autors: {
      [key: string]: string[];
    };
  };
  faq: {
    accordion: object;
  };
}
export const siteData: SiteData = {
  prices: {
    tabs: {
      ["Формирование цен"]: `B основном, цена зависит от количества косичек и длины Ваших волос.
      Можно заплести до плеч - 30 см, до лопаток - 45 см, до середины спины - 55 см, до тали  65-70 см и длиннее.
      При плетении зизи, учитывается технология плетения.
      Если мы плетем сенегальские косички, «де-косы», безопасные дреды, «мамбо твисты», учитывается количество используемого материала.`,
      ["Классические косички"]: `Классические косы являются наиболее распространенными. Плетение производится вручную из трех прядей по всей длине волос. Чем тоньше пряди, тем прочнее прическа. В среднем, для этой прически делается около 200-250 косичек, но их количество может доходить до 600. Если Вам кажется, что у Вас не достаточно густые волосы, Вы можете легко изменить свою прическу, выбрав классические африканские косички с канекалоном. Косички могут быть любой длины. Вы можете носить классические африканские косички до четырех месяцев.`,
      ["Французские косички"]: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tincidunt pellentesque lorem,
            id suscipit dolor rutrum id. Morbi facilisis porta volutpat. Fusce adipiscing, mauris quis
            congue tincidunt, sapien purus suscipit odio, quis dictum odio tortor in sem. Ut sit amet
            libero nec orci mattis fringilla. Praesent eu ipsum in sapien tincidunt molestie sed ut
            magna. Nam accumsan dui at orci rhoncus pharetra tincidunt elit ullamcorper. Sed ac mauris
            ipsum. Nullam imperdiet sapien id purus pretium id aliquam mi ullamcorper.`,
      ["Косички зизи"]: `Африканские косички зизи представляют собой готовые тонкие косички диаметром около 3 мм из синтетических волос.
      Я предлагаю своим клиенткам две технологии плетения зизи на выбор.
      Первая заключается в следующем: берутся две пряди готовых кос зизи, складываются пополам (в итоге мы имеем четыре косички). Одна выпускается от корня, а три остальные проплетаются до конца своего волоса и закрепляются. По голове плетётся максимум 120 точечных косичек, и в каждой из них по четыре тоненькие зизи.
      По второй технологии, одна прядь заменяется готовой косичкой из канеколона. Количество кос увеличивается, но при этом уменьшается вес прически.
      Прическа состоит из большого количества косичек (около 500-600 штук), но несмотря на это, зизи очень легкие и не вызывают дискомфорта при ношении. Косы выглядят стильно и привлекательно, поэтому их выбирают как школьницы, так и взрослые.`,
    },
  },
  testimonials: {
    autors: {
      ["Мария"]: [
        "../../assets/img/testimonials/face1.jpg",
        "https://vk.com/",
        `Я первый раз плела косички, и очень боялась. Ведь первый опыт имеет большое значение.
                Влюбилась в эту прическу. Все было очень аккуратно, и естественно.Очень большой выбор
                материалов и самой не надо было никуда ехать. Марина специалист своего дела, и очень хороший
                человек. Это важно когда контактировать с мастером нужно не 15 минут.`,
      ],
      ["Хамиль"]: [
        "../../assets/img/testimonials/hamil250-r1.png",
        "https://instagram.com/",
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tincidunt pellentesque lorem,
                id suscipit dolor rutrum id. Morbi facilisis porta volutpat. Fusce adipiscing, mauris quis
                congue tincidunt, sapien purus suscipit odio, quis dictum odio tortor in sem. Ut sit amet
                libero nec orci mattis fringilla. Praesent eu ipsum in sapien tincidunt molestie sed ut
                magna. Nam accumsan dui at orci rhoncus pharetra tincidunt elit ullamcorper. Sed ac mauris
                ipsum. Nullam imperdiet sapien id purus pretium id aliquam mi ullamcorper.`,
      ],
      ["Ксения"]: [
        "../../assets/img/testimonials/ksusha250.jpg",
        "https://vk.com/",
        `Хочу поблагодарить мастера Марину за шикарные косички! Имея опыт заплетения у другого
                мастера, Марина - просто профессионал своего дела. Косички мягкие, легкие и аккуратные.
                Держатся хорошо и долго. Спереди первый ряд косичек смотрится просто великолепно. Безумна
                довольна своей причёской, и ещё не раз повторю.`,
      ],
    },
  },
  faq: {
    accordion: {
      ["Сколько времени уходит на заплетение?"]: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tincidunt pellentesque lorem, id suscipit dolor rutrum
            id. Morbi facilisis porta volutpat. Fusce adipiscing, mauris quis congue tincidunt, sapien purus suscipit odio,
			quis dictum odio tortor in sem. Ut sit amet libero nec orci mattis fringilla.`,
      ["Как долго держится прическа?"]: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tincidunt pellentesque lorem, id suscipit dolor rutrum
            id. Morbi facilisis porta volutpat. Fusce adipiscing, mauris quis congue tincidunt, sapien purus suscipit odio,
			quis dictum odio tortor in sem. Ut sit amet libero nec orci mattis fringilla.`,
      ["Как ухаживать за прической?"]: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tincidunt pellentesque lorem, id suscipit dolor rutrum
            id. Morbi facilisis porta volutpat. Fusce adipiscing, mauris quis congue tincidunt, sapien purus suscipit odio,
			quis dictum odio tortor in sem. Ut sit amet libero nec orci mattis fringilla.`,
      ["Не повредит ли это мои волосы?"]: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tincidunt pellentesque lorem, id suscipit dolor rutrum
            id. Morbi facilisis porta volutpat. Fusce adipiscing, mauris quis congue tincidunt, sapien purus suscipit odio,
			quis dictum odio tortor in sem. Ut sit amet libero nec orci mattis fringilla.`,
    },
  },
};
