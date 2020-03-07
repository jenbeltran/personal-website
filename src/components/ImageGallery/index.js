import React from 'react';

import dessert from '../../images/dessert.jpg';
import vacation from '../../images/vacation.png';
import salad from '../../images/salad.png';
import practice from '../../images/practice.png';
import recital from '../../images/recital.png';

import { Grid, PicOne, PicTwo, PicThree, PicFour, PicFive, Img } from './css';

function ImageGallery() {
	return (
		<section>
			<Grid>
				<PicOne>
					<Img src={practice} alt="Picture of Jen at dance practice" />
				</PicOne>

				<PicTwo>
					<Img src={recital} alt="Picture of Jen at dance recital" />
				</PicTwo>

				<PicThree>
					<Img src={salad} alt="A picture of a salad" />
				</PicThree>
				<PicFour>
					<Img src={dessert} alt="Picture of dessert" />
				</PicFour>
				<PicFive>
					<Img src={vacation} alt="Picture of Jen on vacation" />
				</PicFive>
			</Grid>
		</section>
	);
}

export default ImageGallery;
