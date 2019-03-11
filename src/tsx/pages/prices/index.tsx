import * as React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { Layout } from '../../components/layout';
import { PageH1 } from '../../components/pageH1';
import { CheckBox } from '../../components/checkBox';
import { siteData } from '../../../ts/siteData';

export default function Prices() {
	const tabs = Object.entries(siteData.prices.tabs).map((element, index) => {
		return (
			<div key={index} className="tab">
				<a className="tab-button" href="#">
					{element[0]}
				</a>
				<div className="tab-content">
					<p>{element[1]}</p>
				</div>
			</div>
		);
	});
	return renderToStaticMarkup(
		<Layout>
			<section>
				<PageH1 mod="prices" />
				<div className="container container--static">
					<div className="tabs">{tabs}</div>
					<div className="calc">
					<form>
						<fieldset>
							<legend>Длина волос</legend>
							<CheckBox label="от 5 до 15 см" id="length-1" name="length" value="1500" />
							<CheckBox label="от 15 до 25 см" id="length-2" name="length" value="3000" />
							<CheckBox label="от 25 и длиннее" id="length-3" name="length" value="6000" />
						</fieldset>
						<fieldset>
							<legend>Вид косичек</legend>
							<CheckBox label="Классисечские афрокосички" id="kind-1" name="kind" value="1500" />
							<CheckBox label="Французские косички - брейды" id="kind-2" name="kind" value="3000" />
							<CheckBox label="Афрокосички зизи" id="kind-3" name="kind" value="6000" />
						</fieldset>
						<input className="calc__submit" type="submit" value="Расcчитать стоимость" />
					</form>
					</div>
				</div>
			</section>
		</Layout>
	);
}
