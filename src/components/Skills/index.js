import React from 'react';
import CodingStack from './data';
import { SkillsSection, RowWrapper, Wrapper, CodingLogo, CodingLanguage } from './css';

const Skills = () => {
	return (
		<SkillsSection>
			<RowWrapper>
				<Wrapper>
					<CodingLogo src={CodingStack[0].photo} alt={CodingStack[0].alt} />
					<CodingLanguage>{CodingStack[0].language}</CodingLanguage>
				</Wrapper>
				<Wrapper>
					<CodingLogo src={CodingStack[1].photo} alt={CodingStack[1].alt} />
					<CodingLanguage>{CodingStack[1].language}</CodingLanguage>
				</Wrapper>
				<Wrapper>
					<CodingLogo src={CodingStack[2].photo} alt={CodingStack[2].alt} />
					<CodingLanguage>{CodingStack[2].language}</CodingLanguage>
				</Wrapper>
				<Wrapper>
					<CodingLogo src={CodingStack[3].photo} alt={CodingStack[3].alt} />
					<CodingLanguage>{CodingStack[3].language}</CodingLanguage>
				</Wrapper>
				<Wrapper>
					<CodingLogo src={CodingStack[4].photo} alt={CodingStack[4].alt} />
					<CodingLanguage>{CodingStack[4].language}</CodingLanguage>
				</Wrapper>
			</RowWrapper>
			<RowWrapper>
				<Wrapper>
					<CodingLogo src={CodingStack[5].photo} alt={CodingStack[5].alt} />
					<CodingLanguage>{CodingStack[5].language}</CodingLanguage>
				</Wrapper>
				<Wrapper>
					<CodingLogo src={CodingStack[6].photo} alt={CodingStack[6].alt} />
					<CodingLanguage>{CodingStack[6].language}</CodingLanguage>
				</Wrapper>
				<Wrapper>
					<CodingLogo src={CodingStack[7].photo} alt={CodingStack[7].alt} />
					<CodingLanguage>{CodingStack[7].language}</CodingLanguage>
				</Wrapper>
				<Wrapper>
					<CodingLogo src={CodingStack[8].photo} alt={CodingStack[8].alt} />
					<CodingLanguage>{CodingStack[8].language}</CodingLanguage>
				</Wrapper>
				<Wrapper>
					<CodingLogo src={CodingStack[9].photo} alt={CodingStack[9].alt} />
					<CodingLanguage>{CodingStack[9].language}</CodingLanguage>
				</Wrapper>
			</RowWrapper>
		</SkillsSection>
	);
};

export default Skills;
