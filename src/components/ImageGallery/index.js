import React from 'react';

import dessert from '../../images/dessert.jpg';
import vacation from '../../images/vacation.png';
import salad from '../../images/salad.png';
import practice from '../../images/practice.png';
import recital from '../../images/recital.png';

import { Grid, PicOne, PicTwo, PicThree, PicSix, PicSeven, Img } from './css';

function ImageGallery() {
	return (
		<section>
			<Grid>
				<PicOne>
					<Img src={practice} alt="Picture of Ruiting at an event" />
				</PicOne>

				<PicTwo>
					<Img src={recital} alt="The Tech Teahouse group at a Hackathon" />
				</PicTwo>

				<PicThree>
					<Img src={salad} alt="A picture of Jen and Ruiting smiling at the Hackathon" />
				</PicThree>
				<PicSix>
					<Img src={dessert} alt="Jen, Ruiting and company on the Elevate stage posing for the camera." />
				</PicSix>
				<PicSeven>
					<Img
						src={vacation}
						alt="Some  of the tech and tea group sitting on a table together smiling for the camera."
					/>
				</PicSeven>
			</Grid>
		</section>
	);
}

export default ImageGallery;
