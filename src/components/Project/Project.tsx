import {
    faDiscord,
    faGithub,
    faSteam,
    IconDefinition,
    faNpm,
} from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as _ from "lodash";
import * as React from "react";
import { useTranslation } from "react-i18next";
import posed from "react-pose";
import { IProject } from "src/pages/PortfolioPage/projects";
import styled from "styled-components";
import tinycolor from "tinycolor2";
import {
    Card,
    ColorOverlay,
    Modal,
    Section,
    ITheme,
    BREAKPOINTS,
    Hooks,
    app,
} from "tchin-react-components";

const { useConnect, useCurrentBreakpoint } = Hooks;

interface IProjectProps extends IProject {
    kClassName?: string;
}

type IVisibility = "visible" | "hidden";

const Project = styled.div<{ theme: ITheme }>`
    position: relative;
    background: transparent;
    height: 50vw;
    width: 100%;
    margin: 0.5% 1%;
    display: flex;
    flex-direction: column;
    padding: 2.5%;
    color: ${({ theme }) => theme.colors.defaultText};
    transition: 500ms;
    cursor: pointer;

    @media (min-width: ${BREAKPOINTS.mdpx}) {
        height: 35vw;
    }
    @media (min-width: ${BREAKPOINTS.lgpx}) {
        height: 25vw;
    }
`;

const Image = styled.img`
    max-width: 100%;
    max-height: 80%;
    display: block;
    margin: auto;
    border-radius: 360rem;
`;

const Title = styled.div`
    margin: 1% 0;
    font-size: 2.5rem;
    text-transform: uppercase;
`;

const Short = styled.div`
    font-size: 1.75rem;
    font-family: "${app.fonts.exo.family}";
`;

const Tags = styled.div`
    margin: 1% 0;
`;

const Tag = styled.div<{ kColor: string; theme: ITheme }>`
    display: inline-block;
    border-radius: 2rem;
    background: ${({ kColor }) =>
        tinycolor(kColor)
            .setAlpha(0.5)
            .toRgbString()};
    padding: 0.5rem 1rem;
    margin-right: 2%;
    margin-top: 2%;
    color: ${({ theme }) => theme.colors.tagText};
    font-family: "${app.fonts.openSans.family}";
`;

const Info = styled(
    posed.div({
        visible: {
            scale: 1,
            opacity: 1,
        },
        hidden: {
            scale: 0,
            opacity: 0,
        },
    })
)`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`;

const InfoOverlay = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 1.6rem;
`;

const Link = ({ link, icon }: { link: string; icon: IconDefinition }) => {
    const { theme } = useConnect(({ theme }) => ({ theme }));
    return (
        <a
            href={link}
            style={{ color: theme.colors.defaultText, marginRight: "1rem" }}
        >
            <FontAwesomeIcon icon={icon} />
        </a>
    );
};

export default (props: IProjectProps) => {
    const {
        logo,
        kClassName = "",
        title,
        short,
        techs,
        description,
        github,
        discord,
        website,
        steam,
        npm,
    } = props;
    const [hoverVisibility, setHoverVisibility] = React.useState<IVisibility>(
        "hidden"
    );
    const [modalVisible, setModalVisible] = React.useState(false);
    const breakpoint = useCurrentBreakpoint("screen");

    const { theme } = useConnect(({ theme }) => ({ theme }));
    const { t } = useTranslation();

    const handleMouseEnter = () => {
        setHoverVisibility("visible");
    };
    const handleMouseLeave = () => {
        setHoverVisibility("hidden");
    };
    const handleClick = () => {
        setModalVisible(true);
    };
    const handleRequestClose = () => {
        setModalVisible(false);
    };

    return (
        <>
            <Project
                className={`project ${kClassName}`}
                theme={theme}
                onClick={handleClick}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <Image src={logo} />
                <div>
                    <Title children={t(title)} />
                    <Short children={t(short)} />
                    <Tags>
                        {_.map(techs, (tech) => (
                            <Tag
                                key={tech.name}
                                children={tech.name}
                                kColor={tech.color}
                                theme={theme}
                            />
                        ))}
                    </Tags>
                </div>
                {breakpoint > BREAKPOINTS.sm && (
                    <Info pose={hoverVisibility}>
                        <ColorOverlay
                            opacity={0.75}
                            color={theme.colors.pageBackground}
                        />
                        <InfoOverlay>{t("portfolio.details")}</InfoOverlay>
                    </Info>
                )}
            </Project>
            <Modal
                overlayClassName="project__modal__overlay"
                bottom
                visible={modalVisible}
                onRequestClose={handleRequestClose}
                parent={document.getElementById("app")}
            >
                <Card
                    title={t(title)}
                    subtitle={
                        <>
                            {github && <Link link={github} icon={faGithub} />}
                            {npm && <Link link={npm} icon={faNpm} />}
                            {discord && (
                                <Link link={discord} icon={faDiscord} />
                            )}
                            {website && <Link link={website} icon={faGlobe} />}
                            {steam && <Link link={steam} icon={faSteam} />}
                        </>
                    }
                >
                    <Section
                        kClassName="project__section"
                        items={_.map(description, (section) => ({
                            content: t(section, {
                                postProcess: "markdown-jsx",
                            }),
                        }))}
                    />
                </Card>
            </Modal>
        </>
    );
};
