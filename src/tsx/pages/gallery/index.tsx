import * as React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { Layout } from '../../components/layout';
import { PageH1 } from '../../components/pageH1';
import * as fs from 'fs';

export default function Gallery() {
	const imagesSrc = [
		'../../assets/img/gallery/large/nastya1-large.jpg',
		'../../assets/img/gallery/large/nastya2-large.jpg',
		'../../assets/img/gallery/large/nastya3-large.jpg',
		'../../assets/img/gallery/large/nastya4-large.jpg'
	];
	const images = imagesSrc.map((element, index) => {
		return (
			<div key={index} className="gallery__slot">
				<img src={element} alt="девушка с африканскими косичками" className="gallery__img" />
			</div>
		);
	});
	return renderToStaticMarkup(
		<Layout>
			<section>
				<PageH1 mod="gallery" />
				<div className="gallery">
					{images}
				</div>
			</section>
		</Layout>
	);
}
