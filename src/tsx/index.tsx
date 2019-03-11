import * as React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { Layout } from './components/layout';
import { PageH1 } from './components/pageH1';
import { Logo } from './components/logo';
import { ContactCard } from './components/contactCard';

function IndexPage(): string {
	return renderToStaticMarkup(
		<Layout mod="index">
			<div className="signboard">
				<PageH1 mod="main" />

				<div className="container">
					<div className="container__col-3 container__col-3--first">
						<ContactCard mod="moscow" />
					</div>
					<div className="container__col-3 container__col-3--second">
						<Logo />
					</div>
					<div className="container__col-3 container__col-3--third">
						<ContactCard mod="petersburgh" />
					</div>
				</div>
			</div>
		</Layout>
	);
}

export default IndexPage;

