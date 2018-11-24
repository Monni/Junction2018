import {HEADER_HEIGHT} from "Constants/componentSettings";
import {PRIVATE_CONTAINER_PADDING, SIDEBAR_BUTTON_HEIGHT, SIDEBAR_WIDTH} from "../../Constants/componentSettings";
import {DETAIL_COLOR, ELEMENT_COLOR, FOOTER_BACKGROUND_COLOR, FOOTER_TEXT_COLOR, HEADER_BACKGROUND_COLOR, PRIMARY_COLOR, PRIMARY_TEXT_COLOR, REAL_BAKCGROUND_COLOR, SUBFOOTER_BACKGROUND_COLOR, TRANSPARENT_BACKGROUND_COLOR} from "../../Constants/globals/colors";

export const header = {
    header: {
        height: HEADER_HEIGHT,
        backgroundColor: ELEMENT_COLOR,
    },
};

export const footer = {
    footer: {
        footer: {
            backgroundColor: ELEMENT_COLOR,
            paddingTop: '50px',
            paddingBottom: '50px',
            height: 200,
        },
    },
};

export const publicContent = {
    content: {
        paddingBottom: 0,
        minHeight: 600,
        width: '100%',
        backgroundColor: 'white'
    }
};

export const privateContent = {
    content: {
        minHeight: 600,
        width: '100%',
        backgroundColor: '#f3f3f3',
    },
    contentContainer: {
        padding: PRIVATE_CONTAINER_PADDING,
        width: '80%',
    },
    sidebar: {}
};

export const sidebar = {
    sidebar: {
        minHeight: 600,
        width: SIDEBAR_WIDTH,
        backgroundColor: REAL_BAKCGROUND_COLOR,
        left: '0px',
        padding: '0px',
        borderRight: 'solid 1px white',
        height: '100%',
    },
    button: {
        backgroundColor: REAL_BAKCGROUND_COLOR,
        width: SIDEBAR_WIDTH,
        height: SIDEBAR_BUTTON_HEIGHT,
        paddingLeft: '0px',
        marginLeft: '0px',
        marginTop: '0px',
        borderRadius: '0px',
        border: 'none',
        fontSize: 25,
        color: 'white',
        borderRight: "solid 1px #d3d3d3",
        borderBottom: "solid 1px #d3d3d3"
    }
};