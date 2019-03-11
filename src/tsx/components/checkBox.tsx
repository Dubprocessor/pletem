import * as React from 'react';
type Props = {
	label: string;
    id: string;
    name: string;
	value: string;
};
export function CheckBox(props: Props) {
	return (
		<div className="check-box">
			<label className="check-box__label" htmlFor={props.id}>{props.label}</label>
			<input className="check-box__input" id={props.id} type="radio" name={props.name} value={props.value} />
			<svg className="check-box-svg" viewBox="0 0 60 40" aria-hidden="true" focusable="false">
				<path
                    className="check-box-svg__path"
					d="M21,2 C13.4580219,4.16027394 1.62349378,18.3117469 3,19 C9.03653312,22.0182666 25.2482171,10.3758914 30,8 C32.9363621,6.53181896 41.321398,1.67860195 39,4 C36.1186011,6.8813989 3.11316157,27.1131616 5,29 C10.3223659,34.3223659 30.6434647,19.7426141 35,18 C41.2281047,15.5087581 46.3445303,13.6554697 46,14 C42.8258073,17.1741927 36.9154967,19.650702 33,22 C30.3136243,23.6118254 17,31.162498 17,34 C17,40.4724865 54,12.4064021 54,17 C54,23.7416728 34,27.2286213 34,37"
					strokeWidth="4"
					fill="none"
					strokeDasharray="270"
					strokeDashoffset="270"
				/>
			</svg>
		</div>
	);
}
export const consumers = [ 'src/compiled/tsx/pages/prices/index.js' ];
