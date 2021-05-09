import {StyleSheet, Dimensions, Platform} from 'react-native';
import userAccountStore from "../stores/userAccountStore";

let {width, height} = Dimensions.get('window');
if (width > height) {
    let t = height;
    height = width;
    width = t;
}

export default StyleSheet.create({
    buttons: {
        borderRadius: height / 12,
    },
    imageBackgroundComponentStyle: {
        flex: 1,
        //paddingTop: height / 12,
        backgroundColor: '#424143',

    },
    headerTitleText: {
        flex: 1,
        textAlign: 'center',
        fontFamily: 'Yekan',
        fontSize: width / 18,
        lineHeight: width / 15,
        fontWeight: '300',
        color: 'white',
        textAlignVertical: 'center',
    },
    headerStyle: {
        height: (height / 12) + ((Platform.OS == 'android') ? 20 : 0),
        width: width,
        shadowOpacity: 0,
        backgroundColor: '#53286F',
        borderBottomWidth: 0,
        paddingTop: 20,
        elevation: 0,
    },
    videoStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#23307f',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    persianText: {
        fontFamily: 'Yekan',
        backgroundColor: 'transparent',
    },

    inputRegisterTexts: {
        backgroundColor: 'white',
        height: height / 12,
        width: width / 1.5,
        borderRadius: width / 36,
        borderColor: '#6a6c6b',
        padding: 0,
    },
    errorBox: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row-reverse',
    },
    errorText: {
        borderRadius: width / 36,
        color: 'white',
        paddingHorizontal: width / 72,
        paddingTop: width / 140,
        backgroundColor: 'red',
        textAlign: userAccountStore.isRTL ? 'right' : 'left',
        fontSize: width / 34,
    },

    //profile
    profileView: {
        backgroundColor: '#366b88',
        alignItems: 'center',
        flex: 1,
    },
    formProfile: {
        flexDirection: 'row',
    },
    inputTexts: {
        backgroundColor: 'white',
        height: height / 12,
        width: width / 3,
        borderRadius: height / 12,
        borderColor: '#6a6c6b',
        padding: 0,
    },
    iranFlagContainer: {
        marginTop: height / 360,
        paddingRight: width / 120,
        marginRight: width / 120,
        flexDirection: 'row',
        height: height / 12.5,
        backgroundColor: 'white',
        borderColor: '#6a6c6b',
        borderRadius: width / 36,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputCodeText: {
        backgroundColor: 'white',
        height: height / 12,
        width: width / 3,
        borderRadius: width / 36,
        borderColor: '#6a6c6b',
        padding: 0,
    },
    textPlaceHolder: {
        color: 'white',
        // color: 'black',
        fontSize: width / 25,
        textAlign: 'center',
        padding: 0,
    },
    profileFormStyles: {
        flexDirection: 'row',
        width: width / 1.3,
        // backgroundColor:'orange',
        // marginBottom:20
    },
    renderGenderStyle: {
        backgroundColor: 'white',
        width: width / 2.5,
        height: height / 20,
        borderRadius: width / 36,
        borderColor: '#6a6c6b',
        justifyContent: 'center',
        alignItems: 'center',
    },
    registerButton: {
        height: height / 9,
        width: width / 5,
        borderRadius: width / 36,
        borderColor: '#6a6c6b',
        justifyContent: 'center',
        alignItems: 'center',
    },
    dateStyle: {
        width: width / 2.8,
        height: height / 12,
        backgroundColor: 'white',
        flexDirection: 'row',
        borderRadius: width / 36,
        borderColor: '#6a6c6b',
    },
    birthdayStyle: {
        backgroundColor: 'white',
        borderRadius: width / 36,
        height: height / 12,
        width: width / 2.5,
        justifyContent: 'center',
    },
    imageAddIcon: {
        position: 'absolute',
        top: width / 6.6,
        right: height / 23,
        color: 'white',
        textAlign: 'center',
        width: width / 4.5,
        height: width / 4.5,
        fontSize: width / 16,
    },

    //profile

    //store

    ShopContainer: {
        padding: 4,
        borderRadius: width / 36,
        alignItems: 'center',
        justifyContent: 'space-between',
        width: width / 2.3,
        height: height / 2.8,
        margin: width / 72,
        borderWidth: 0.5,
        borderColor: 'transparent'
    },

    //store

    showUserImageSignUpStyle: {
        height: width / 4.5,
        width: width / 4.5,
        borderRadius: width / 9,
        borderWidth: 2,
        borderColor: 'white',
    },

    abaQImageSignInUp: {
        width: width / 4.5,
        height: height / 6,
        marginLeft: width / 36,
    },

    //start

    modalCloseIcon: {
        color: 'gray',
        fontSize: height / 35,
        position: 'absolute',
        top: 0,
        right: -width / 36,
        padding: width / 36,
        marginRight: 10
    },

    modalContainer: {
        padding: width / 72,
        width: width / 1.2,
        height: height / 2.5,
        borderWidth: 2,
        borderColor: '#f0f0f0',
        borderRadius: width / 18,
    },

    percentageText1: {
        position: 'absolute',
        left: 10,
        top: 10,
        marginLeft: width / 72,
        color: 'gray',
        fontSize: width / 29
    },
    percentageText2: {
        position: 'absolute',
        left: 10,
        top: 10,
        marginLeft: width / 72,
        color: '#828282',
        fontSize: width / 29
    },

    adminButtonsView: {
        width: width,
        backgroundColor: 'rgba(0,0,0,.1)',
        marginBottom: 10,
        borderWidth: 1,
        borderColor: 'white',
    },

    adminButtonsRight: {
        position: 'absolute',
        right: width / 40,
        top: height / 60,
    },

    adminButtonsLeft: {
        position: 'absolute',
        left: width / 40,
        top: height / 60,
    },

    finalWinners: {
        width: width / 1.3,
        height: height / 11.8,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    selection: {
        width: width / 1.4,
        height: height / 15,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: height / 30,
        borderWidth: 1,
        borderColor: '#d9d9d9',
        flexDirection: 'row',
    },

    textSelection: {
        textAlign: 'right',
        fontSize: width / 28,
        width: width / 1.7,
    },

    questionStyle: {
        width: width / 1.5,
        marginTop: height / 60,
        paddingBottom: height / 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: height / 120,
    },

    questionContainer: {
        width: width / 1.05,
        // height:height/2.25,
        paddingBottom: height / 80,
        alignItems: 'center',
        paddingTop: height / 60,
        backgroundColor: 'white',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        position: 'absolute',
        top: height / 7,
    },

    questionLogoStyle: {
        position: 'absolute',
        top: height / 50,
        right: width / 25,
    },

    questionEyeStyle: {
        flexDirection: 'row',
        position: 'absolute',
        top: height / 50,
    },

    questionViewerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: width / 200,
    },

    controlRoomButtonStyle: {
        height: height / 14,
        width: width / 3,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: width / 36,
        marginBottom: height / 30,
    },

    overlayChildrenWrapperStyle: {
        borderRadius: width / 36,
        height: height / 1.8,
        width: width / 1.12,
        padding: 0,
    },

    centerVerticalHorizontal: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    controlRoomButtonsText: {
        color: 'white',
        textAlign: 'center',
        fontSize: width / 35,
    },

    welcomeBackModalFirstText: {
        textAlign: 'center',
        color: 'black',
        fontSize: height / 40,
    },

    welcomeBackModalSecondText: {
        textAlign: 'center',
        color: 'gray',
        fontSize: height / 40,
    },

    welcomeBackModalButton: {
        backgroundColor: '#b2cb25',
        width: width / 4,
        height: height / 20,
    },

    modalButtonsText: {
        color: 'white',
        fontSize: width / 20,
        fontWeight: 'bold'
    },

    winnerNullModalRootView: {
        borderRadius: width / 36,
        paddingTop: height / 60,
        width: width / 1.12,
        height: height / 1.8,
    },

    advertisementPresenterImage: {
        width: width / 9,
        height: width / 9.5,
        zIndex: 11,
    },

    advertisementPresenterView: {
        position: 'absolute',
        top: 50,
        flexDirection: 'row',
    },

    timeUpAndSuccessViewStyle: {
        position: 'absolute',
        top: height / 15,
        width: width / 3,
        height: height / 20,
        left: width / 3,
        zIndex: 30,
        borderRadius: height / 12,
    },

    chatViewStyle: {
        flexDirection: 'row',
        marginBottom: height / 50,
        width: width,
    },

    chatTextStyle: {
        // color: '#bfafd8',
        marginRight: width / 180,
        width: width / 5.9,
    },

    showUserImageStyle: {
        width: width / 15,
        height: width / 15,
        borderRadius: width / 30,
        borderWidth: 1,
        borderColor: 'white',
    },

    showWinnerImageStyle: {
        width: width / 5,
        height: width / 5,
        borderRadius: width / 10,
        borderWidth: 1,
        borderColor: 'white',
        // backgroundColor:'red'
    },
    showWinnerImageViewStyle: {
        // width: width / 5,
        // height: width /5,
        // borderRadius: width / 10,
        // borderWidth: 1,
        // borderColor: 'white',
        // width: width / 10,
        // height: width /10,
        // borderRadius: width / 200,
        // backgroundColor:'red',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },

    showYouAreWinnerImageStyle: {
        // width: width / 5,
        // height: width / 5,
        // borderRadius: width / 10,
        borderWidth: 1,
        borderColor: 'white',
    },

    renderScrollWinnersScrollViewStyle: {
        borderRadius: width / 36,
        width: width / 1.3,
        padding: 10,
    },

    renderScrollWinnersViewStyle: {
        borderRadius: width / 36,
        height: height / 1.35,
        width: width / 1.12,
        padding: 0,
        alignItems: 'center',
    },

    renderScrollWinnersShowNumberViewStyle: {
        backgroundColor: '#23307f',
        borderRadius: height / 12,
    },
    renderLikeAndWinnersItems: {
        backgroundColor: 'white',
        width: width / 1.12,
        borderTopLeftRadius: width / 15,
        borderTopRightRadius: width / 15,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 5,
    },

    renderLikeItems: {
        // backgroundColor: 'white',
        width: width / 1.12,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 15,
        paddingTop: 7,
    },

    renderLikeAndDislikeItem: {
        flexDirection: 'row-reverse',
        justifyContent: 'space-around',
        width: width / 1.9,
        padding: 5,
        borderRadius: width / 36
    },
    //start

    //home

    showUserImageHomeStyle: {
        height: width / 11.5,
        width: width / 11.5,
        borderRadius: width / 23,
        borderWidth: 1,
        borderColor: 'white',
    },

    navigationButtons: {
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: width / 100,
    },

    navigationImages: {
        width: width / 8.34,
        height: width / 8.34,
        borderRadius: width / 16.68,
    },

    extraLifeStyle: {
        width: width / 3,
        height: height / 13,
        marginTop: height / 60,
        backgroundColor: 'transparent',
    },

    extraLifeFeatureRoundStyle1: {
        width: 2 * width / 3,
        height: height / 15,
        borderRadius: width / 36,
        borderWidth: width / 200,
        borderColor: '#2CBAD990',
    },

    extraLifeFeatureRoundStyle2: {
        backgroundColor: 'white',
        width: width / 3.6,
        height: height / 15,
    },

    popoverTooltipHomeStyle: {
        fontSize: width / 15,
        color: '#2CBAD9',
        height: height / 14,
    },

    renderContainHomeViewStyle: {
        height: height / 2.4,
        width: width / 1.15,
        backgroundColor: 'white',
        borderRadius: height / 60,
        marginTop: height / 25,
        marginBottom: height / 30,
        alignItems: 'center',
    },

    renderContainHomeHelpAccountPopoverStyle: {
        alignItems: 'center',
        width: width / 1.2,
        height: height / 14,
        flexDirection: 'row',
        marginTop: height / 150,
    },

    renderContainHomeRankBalanceStyle: {
        width: width / 1.15,
        height: height / 5.6,
        backgroundColor: '#2CBAD999',
    },

    renderContainHomeBalanceStyle: {
        width: width / 2.31,
        height: height / 5.8,
        backgroundColor: 'white',
    },

    renderContainHomeRankStyle: {
        width: width / 2.31,
        height: height / 5.8,
        backgroundColor: 'white',
        justifyContent: 'center',
    },

    renderContainHomeHelpCircleStyle: {
        fontSize: width / 15,
        width: width / 12,
        height: height / 17,
        color: 'white',
        textAlign: 'center'
    },

    startButtonStyle: {
        backgroundColor: '#e22b51',
        width: width / 3,
        height: height / 15,
        borderRadius: width / 36,
        justifyContent: 'center',
        borderColor: '#e22b51',
    },

    continueAndExitButtonStyle: {
        width: width / 3,
        height: height / 15,
        borderRadius: width / 36,
        justifyContent: 'center',
        borderColor: 'transparent',
    },

    imageBackgroundStyleView: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
    },

    imageBackgroundStyle: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        height: height,
        width: width,
    },

    imageBackgroundStyleViewByHeader: {
        position: 'absolute',
        top: -(height / 16),
        bottom: 0,
        right: 0,
        left: 0,
    },

    imageBackgroundStyleByHeader: {
        position: 'absolute',
        top: -(height / 16),
        bottom: 0,
        height: height,
        width: width,
    },

    textWhiteHomeStyle: {
        color: 'white',
        textAlign: 'center',
    },
    textWhiteHomeBoldStyle: {
        color: 'white',
        textAlign: 'center',
    },
    textBlackHomeStyle: {
        color: 'black',
        textAlign: 'center',
    },
    //home

    //aboutUs
    socialMediaImages: {
        width: width / 14.3,
        height: height / 22
    },

    renderGivePointsIconStyle: {
        width: width / 14.5,
        height: height / 21,
        fontSize: width / 15,
        paddingLeft: width / 140,
        borderRadius: height / 12,
    },

    aboutUsButtons: {
        width: width / 1.8,
        height: height / 15,
        backgroundColor: '#e22b51',
        borderRadius: width / 36,
        marginBottom: height / 60,
        borderColor: '#e22b51',
    },
    aboutUsSocialNetButtons: {
        width: width / 8,
        height: height / 14,
        backgroundColor: 'white',
        borderRadius: width / 36,
        marginBottom: height / 60,
        borderColor: '#e22b51',
    },

    aboutUsDiceIcon: {
        width: width / 11,
        height: height / 21,
        fontSize: width / 12,
        borderRadius: height / 12,
    },

    aboutUsHelpIcon: {
        width: width / 12,
        height: height / 19.5,
        fontSize: width / 16,
        paddingLeft: width / 75,
        paddingTop: height / 150,
        borderRadius: height / 12,
    },

    //HowToPlay
    howToPlayImageSizeStyle: {
        width: width / 2.5,
        height: width / 2.5,
    },

    howToPlaySecondTextStyle: {
        fontSize: width / 23,
        marginBottom: height / 65,
        color: 'white'
    },

    howToPlayFirstTextStyle: {
        fontSize: width / 23,
        marginBottom: height / 65,
        color: 'white'
    },
    //HowToPlay

    //faq
    sideQuestionsStyleFaq: {
        width: width / 72,
    },

    scrollViewStyleFaq: {
        flex: 1,
        padding: width / 36,
        justifyContent: 'space-around',
    },

    questionStyleFaq: {
        textAlign: userAccountStore.isRTL ? 'right' : 'left',
        color: 'black',
        fontSize: width / 20,
        marginBottom: height / 72,
    },
    answerStyle: {
        textAlign: userAccountStore.isRTL ? 'right' : 'left',
        color: 'black',
        fontSize: width / 30,
        marginBottom: height / 72,
    },
    //faq

    //featureRound

    featureRoundMedalStyle: {
        width: width / 10,
        position: 'absolute',
        top: height / 18,
        left: width / 4.3,
    },

    featureRoundButtonsStyle: {
        width: width / 1.4,
        borderRadius: height / 12,
        height: height / 12,
        paddingLeft: width / 72,
        borderWidth: width / 350,
    },

    featureRoundInternalButtonsStyle: {
        width: width / 3.2,
        height: height / 12.6,
        borderRadius: height / 12,
    },

    featureRoundInternalButtonsTextStyle: {
        textAlign: 'center',
        fontSize: width / 28,
    },

    featureRoundBoxStyle: {
        alignItems: 'center',
        width: width,
    },

    featureRoundThreeViewStyle: {
        borderRadius: height / 20,
        width: width / 1.2,
        height: height / 4.3,
        // paddingHorizontal:width/60,
        borderWidth: 1,
    },

    //featureRound

    //TopPlayers
    topPlayerWinners: {
        width: width,
        // backgroundColor: 'rgba(20,33,84,.5)',
        backgroundColor: 'transparent',
        height: height / 14,
        padding: 20
        // marginBottom: height / 55,
    },

    topPlayerAllWinners: {
        position: 'absolute',
        bottom: height / 100,
        left: width / 23.22,
        backgroundColor: 'rgba(20,33,84,.5)',
        width: width / 1.1,
        height: height / 8.5,
        borderBottomRightRadius: width / 18,
        borderBottomLeftRadius: width / 18,
        flexDirection: 'row',
    },

    topButton: {
        backgroundColor: '#68BDED',
        width: width / 3.8,
        height: height / 20,
        borderRadius: width / 50,
        // borderWidth:2,
        // borderColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },

    firstThreeTops: {
        backgroundColor: 'transparent',
        width: width / 3.5,
        // height: height / 5,
        // borderRadius: width / 10,
        // borderWidth:1,
        // borderColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    firstThreeTopsText: {
        color: 'white',
        // width: width / 3,
        fontSize: width / 25,
        textAlign: 'center'
    },
    topButtonsText: {
        // color: 'white',
        color: 'black',
        width: width / 4,
        textAlign: 'center',
        fontSize: width / 27,
        // fontWeight:'bold',
    }
    //TopPlayers


});
