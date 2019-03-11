import * as React from 'react';

type Props = {
	children: React.ReactNode;
	mod?: string;
};

export function Layout(props: Props) {
	return (
		<html lang="ru">
			<head>
				<meta charSet="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<title>Центр Афроплетения</title>
				<script src="https://use.fontawesome.com/e3f6dba723.js" />
				<link
					rel="preload"
					href={`${props.mod === 'index' ? './' : '../../'}assets/fonts/Alexandra_Script.ttf`}
					as="font"
					type="font/ttf"
				/>
				<link
					rel="stylesheet"
					href={`${props.mod === 'index' ? './' : '../../'}dist/styles/minified/main.css`}
				/>

				<link
					href="https://fonts.googleapis.com/css?family=Poiret+One&amp;subset=cyrillic"
					rel="stylesheet"
					crossOrigin=""
				/>
			</head>

			<body>
				<header className="header">
					<button id="menuButton" className="header__menu-button">
						МЕНЮ
					</button>
					<nav id="menu" className="header__nav">
						{' '}
						<a className="header__link" href={`${props.mod === 'index' ? './' : '../../'}`}>
							Главная
						</a>{' '}
						<a className="header__link" href={`${props.mod === 'index' ? './' : '../../'}pages/about`}>
							Обо мне
						</a>{' '}
						<a className="header__link" href={`${props.mod === 'index' ? './' : '../../'}pages/gallery`}>
							Галерея
						</a>{' '}
						<a
							className="header__link"
							href={`${props.mod === 'index' ? './' : '../../'}pages/testimonials`}
						>
							Отзывы
						</a>{' '}
						<a className="header__link" href={`${props.mod === 'index' ? './' : '../../'}pages/prices`}>
							Цены
						</a>{' '}
						<a className="header__link" href={`${props.mod === 'index' ? './' : '../../'}pages/contacts`}>
							Контакты
						</a>{' '}
						<a className="header__link" href={`${props.mod === 'index' ? './' : '../../'}pages/faq`}>
							Вопросы
						</a>{' '}
					</nav>
				</header>
				<div className="wrapper">{props.children}</div>
				<footer className="footer">
					<div className="footer__content">
						<small>
							2017 &copy; |
							<a href="#">Dub Processor</a>
						</small>
					</div>
				</footer>
				<script src={`${props.mod === 'index' ? './' : '../../'}dist/scripts/minified/bundle.js`} />
				{props.mod === 'contacts' ? (
					<script
						src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCdaNHuar7WHma0E6M6u3LVAzN0xZ5n3jw&language=ru&region=ru&callback=initMap"
						async={true}
						defer={true}
					/>
				) : null}
			</body>
		</html>
	);
}

export const consumers = [
	'src/compiled/tsx/index.js',
	'src/compiled/tsx/pages/about/index.js',
	'src/compiled/tsx/pages/contacts/index.js',
	'src/compiled/tsx/pages/faq/index.js',
	'src/compiled/tsx/pages/gallery/index.js',
	'src/compiled/tsx/pages/prices/index.js',
	'src/compiled/tsx/pages/testimonials/index.js'
];
