import * as React from 'react';
import { View, Text, TouchableOpacity,ScrollView, TextInput, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import styles from "./styles";
import { BgView} from "../../components/views"
import { NavHeader} from "../../components/headers"
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'
export default function OrderScreen(props) {
  return (
    <BgView>
        <NavHeader
        onFuncPassed={() => console.log("Go Back")}
        title={"Running Orders"}
        />
        <ScrollView>
            <View style={styles.tabContainer}>
                <TouchableOpacity style={styles.tabActive}>
                    <Text style={styles.tabLabelActive}>Preparing</Text>
                    <View style={styles.tabIcon}>
                        <Text style={styles.tabIconTextActive}>50</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tab}>
                    <Text style={styles.tabLabel}>Ready</Text>
                    <View style={styles.tabIcon}>
                        <Text style={styles.tabIconText}>50</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tab}>
                    <Text style={styles.tabLabel}>Picked Up</Text>
                    <View style={styles.tabIcon}>
                        <Text style={styles.tabIconText}>50</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.searchBox}>
                <TextInput 
                placeholder={"Search by Order ID, Name etc...."}
                onChangeText={(text) => console.log("text", text)}
                style={styles.inputStyle}
                />
                <Image  
                source={require("../../assets/images/search-interface-symbol.png")}
                style={styles.searchIcon}
                />
            </View>
            <View style={styles.card}>
                <View style={styles.cardHeader}>
                    <View style={styles.cardHeaderLeft}>
                        <Text style={styles.cardHeaderLeftText}>
                            Fast Food Delivery
                        </Text>
                    </View>
                    <Text style={styles.cardHeaderRightText}>
                        ID: 146553699565
                    </Text>
                </View>
                <View style={styles.cardSubHeader}>
                    <View style={styles.cardSubHeaderLeft}>
                        <Text style={styles.cardSubHeaderLeftText}>
                            South Indian Restaurant
                        </Text>
                        <Text style={styles.cardSubHeaderLeftText}>
                            Sector 3, Noida
                        </Text>
                    </View>
                    <View style={styles.cardSubHeaderRight}>
                        <Text style={styles.cardSubHeaderRightText}>
                            PAID
                        </Text>
                    </View>
                </View>
                <View style={styles.toolBar}>
                    <Text style={styles.toolBarLabel}>Rahim's 3rd Order</Text>
                    <Image  
                    source={require("../../assets/images/copy-two-paper-sheets-interface-symbol.png")}
                    style={styles.icon}
                    />
                    <Image  
                    source={require("../../assets/images/placeholder.png")}
                    style={styles.icon}
                    />
                    <TouchableOpacity style={styles.ctaBtn}>
                        <Text style={styles.ctaBtnText}>Cancel Order</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.progressView}>
                    <ProgressSteps
                    isComplete={true}
                    >
                        <ProgressStep 
                        removeBtnRow={true}
                        label="2:00 PM" 
                        label2="Placed">
                        </ProgressStep>
                        <ProgressStep 
                        removeBtnRow={true}
                        label="2:03 PM" 
                        label2="Accepted">
                        </ProgressStep>
                        <ProgressStep 
                        removeBtnRow={true}
                        label="2:30 PM" 
                        label2="Proceed">
                        </ProgressStep>
                        <ProgressStep 
                        removeBtnRow={true}
                        label="2:45 PM"
                        label2="Delivered"
                        >
                        </ProgressStep>
                    </ProgressSteps>
                </View>
                <View style={styles.infoView}>
                    <View style={styles.infoViewLeft}>
                        <Text style={styles.infoTitle}>
                            Delivery Address
                        </Text>
                        <Text style={styles.infoSubTitle}>
                            Z 208B, Second Floor, Sector 3 Noida Uttar Pradesh, 201301
                        </Text>
                    </View>
                    <View style={styles.infoViewRight}>
                        <Text style={styles.infoViewRightTitle}>
                            Order Ready In
                        </Text>
                        <CountdownCircleTimer
                            isPlaying
                            duration={7}
                            colors={['#0462c7', '#0462c7', '#0462c7', '#0462c7']}
                            colorsTime={[7, 5, 2, 0]}
                            trailColor="#63a8f2"
                            size={80}
                        >
                            {({ remainingTime }) => <Text>{remainingTime}</Text>}
                        </CountdownCircleTimer>
                    </View>
                </View>
                <View style={styles.totalView}>
                    <Text style={styles.totalViewTitle}>Total Bill</Text>
                    <Text style={styles.totalViewPrice}>₹ 3,000</Text>
                </View>
                <View style={styles.acoTabView}>
                    <View style={styles.acoTabViewCol}>
                        <Text style={styles.acoTabViewColText}>
                            View Full Menu
                        </Text>
                        <Image 
                        source={require('../../assets/images/caret-arrow-up.png')}
                        style={styles.caretUp}
                        />
                    </View>
                    <View style={styles.acoTabViewColActive}>
                        <Text style={styles.acoTabViewColActiveText}>
                            View Full Menu
                        </Text>
                        <Image 
                        source={require('../../assets/images/down-arrow.png')}
                        style={styles.caretDown}
                        />
                    </View>
                </View>
                <View style={styles.acoTabDetailView}>
                        <View style={styles.acoTabDetailRow}>
                            <View style={styles.acoTabDetailCol}>
                                <Image 
                                source={require('../../assets/images/icons8-non-vegetarian-food-symbol-50.png')}
                                style={styles.vegIcon}
                                />
                                <Text style={styles.menuTitle}>1 X Paneer Kabab</Text>
                            </View>
                            <View style={styles.acoTabDetailCol}>
                                <Text style={styles.menuPrice}>₹ 500</Text>
                            </View>
                        </View>
                        <View style={styles.acoTabDetailRow}>
                            <View style={styles.acoTabDetailCol}>
                                <Image 
                                source={require('../../assets/images/icons8-non-vegetarian-food-symbol-50.png')}
                                style={styles.vegIcon}
                                />
                                <Text style={styles.menuTitle}>1 X Mushroom</Text>
                            </View>
                            <View style={styles.acoTabDetailCol}>
                                <Text style={styles.menuPrice}>₹ 500</Text>
                            </View>
                        </View>
                        <View style={styles.acoTabDetailRow}>
                            <View style={styles.acoTabDetailCol}>
                                <Image 
                                source={require('../../assets/images/icons8-non-vegetarian-food-symbol-50.png')}
                                style={styles.vegIcon}
                                />
                                <Text style={styles.menuTitle}>1 X Idli Sambhar</Text>
                            </View>
                            <View style={styles.acoTabDetailCol}>
                                <Text style={styles.menuPrice}>₹ 500</Text>
                            </View>
                        </View>
                        <View style={styles.acoTabDetailRow}>
                            <View style={styles.acoTabDetailCol}>
                                <Image 
                                source={require('../../assets/images/icons8-non-vegetarian-food-symbol-50.png')}
                                style={styles.nonVegIcon}
                                />
                                <Text style={styles.menuTitle}>1 X Chicken Tikka</Text>
                            </View>
                            <View style={styles.acoTabDetailCol}>
                                <Text style={styles.menuPrice}>₹ 500</Text>
                            </View>
                        </View>
                        <View style={styles.acoTabDetailRow}>
                            <View style={styles.acoTabDetailCol}>
                                <Image 
                                source={require('../../assets/images/icons8-non-vegetarian-food-symbol-50.png')}
                                style={styles.nonVegIcon}
                                />
                                <Text style={styles.menuTitle}>1 X Chicken Soup</Text>
                            </View>
                            <View style={styles.acoTabDetailCol}>
                                <Text style={styles.menuPrice}>₹ 500</Text>
                            </View>
                        </View>
                        <View style={styles.acoTabDetailRow}>
                            <View style={styles.acoTabDetailCol}>
                                <Image 
                                source={require('../../assets/images/icons8-non-vegetarian-food-symbol-50.png')}
                                style={styles.nonVegIcon}
                                />
                                <Text style={styles.menuTitle}>1 X Chicken Tandoori</Text>
                            </View>
                            <View style={styles.acoTabDetailCol}>
                                <Text style={styles.menuPrice}>₹ 500</Text>
                            </View>
                        </View>
                </View>
                <View style={styles.totalView}>
                    <Text style={styles.totalViewTitle}>Total Bill</Text>
                    <View style={styles.cardSubHeaderRight}>
                        <Text style={styles.cardSubHeaderRightText}>
                            PAID
                        </Text>
                    </View>
                    <Text style={styles.totalViewTitle}>₹ 3,000</Text>
                </View>
                <View style={styles.footerView}>
                    <Image 
                    source={require("../../assets/images/printer.png")}
                    style={styles.printer}
                    />
                    <Text style={styles.footerText}>
                        Print Bill
                    </Text>
                </View>
            </View>
            <View style={styles.card}>
                <View style={styles.cardHeader}>
                    <View style={styles.cardHeaderLeft}>
                        <Text style={styles.cardHeaderLeftText}>
                            Fast Food Delivery
                        </Text>
                    </View>
                    <Text style={styles.cardHeaderRightText}>
                        ID: 146553699565
                    </Text>
                </View>
                <View style={styles.cardSubHeader}>
                    <View style={styles.cardSubHeaderLeft}>
                        <Text style={styles.cardSubHeaderLeftText}>
                            South Indian Restaurant
                        </Text>
                        <Text style={styles.cardSubHeaderLeftText}>
                            Sector 3, Noida
                        </Text>
                    </View>
                    <View style={styles.cardSubHeaderRight}>
                        <Text style={styles.cardSubHeaderRightText}>
                            PAID
                        </Text>
                    </View>
                </View>
                <View style={styles.toolBar}>
                    <Text style={styles.toolBarLabel}>Rahim's 3rd Order</Text>
                    <Image  
                    source={require("../../assets/images/copy-two-paper-sheets-interface-symbol.png")}
                    style={styles.icon}
                    />
                    <Image  
                    source={require("../../assets/images/placeholder.png")}
                    style={styles.icon}
                    />
                    <TouchableOpacity style={styles.ctaBtn}>
                        <Text style={styles.ctaBtnText}>Cancel Order</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.progressView}>
                    <ProgressSteps
                    isComplete={true}
                    >
                        <ProgressStep 
                        removeBtnRow={true}
                        label="2:00 PM" 
                        label2="Placed">
                        </ProgressStep>
                        <ProgressStep 
                        removeBtnRow={true}
                        label="2:03 PM" 
                        label2="Accepted">
                        </ProgressStep>
                        <ProgressStep 
                        removeBtnRow={true}
                        label="2:30 PM" 
                        label2="Proceed">
                        </ProgressStep>
                        <ProgressStep 
                        removeBtnRow={true}
                        label="2:45 PM"
                        label2="Delivered"
                        >
                        </ProgressStep>
                    </ProgressSteps>
                </View>
                <View style={styles.infoView}>
                    <View style={styles.infoViewLeft}>
                        <Text style={styles.infoTitle}>
                            Delivery Address
                        </Text>
                        <Text style={styles.infoSubTitle}>
                            Z 208B, Second Floor, Sector 3 Noida Uttar Pradesh, 201301
                        </Text>
                    </View>
                    <View style={styles.infoViewRight}>
                        <Text style={styles.infoViewRightTitle}>
                            Order Ready In
                        </Text>
                        <CountdownCircleTimer
                            isPlaying
                            duration={7}
                            colors={['#0462c7', '#0462c7', '#0462c7', '#0462c7']}
                            colorsTime={[7, 5, 2, 0]}
                            trailColor="#63a8f2"
                            size={80}
                        >
                            {({ remainingTime }) => <Text>{remainingTime}</Text>}
                        </CountdownCircleTimer>
                    </View>
                </View>
                <View style={styles.totalView}>
                    <Text style={styles.totalViewTitle}>Total Bill</Text>
                    <Text style={styles.totalViewPrice}>₹ 3,000</Text>
                </View>
                <View style={styles.acoTabView}>
                    <View style={styles.acoTabViewCol}>
                        <Text style={styles.acoTabViewColText}>
                            View Full Menu
                        </Text>
                        <Image 
                        source={require('../../assets/images/caret-arrow-up.png')}
                        style={styles.caretUp}
                        />
                    </View>
                    <View style={styles.acoTabViewColActive}>
                        <Text style={styles.acoTabViewColActiveText}>
                            View Full Menu
                        </Text>
                        <Image 
                        source={require('../../assets/images/down-arrow.png')}
                        style={styles.caretDown}
                        />
                    </View>
                </View>
                <View style={styles.acoTabDetailView}>
                        <View style={styles.acoTabDetailRow}>
                            <View style={styles.acoTabDetailCol}>
                                <Image 
                                source={require('../../assets/images/icons8-non-vegetarian-food-symbol-50.png')}
                                style={styles.vegIcon}
                                />
                                <Text style={styles.menuTitle}>1 X Paneer Kabab</Text>
                            </View>
                            <View style={styles.acoTabDetailCol}>
                                <Text style={styles.menuPrice}>₹ 500</Text>
                            </View>
                        </View>
                        <View style={styles.acoTabDetailRow}>
                            <View style={styles.acoTabDetailCol}>
                                <Image 
                                source={require('../../assets/images/icons8-non-vegetarian-food-symbol-50.png')}
                                style={styles.vegIcon}
                                />
                                <Text style={styles.menuTitle}>1 X Mushroom</Text>
                            </View>
                            <View style={styles.acoTabDetailCol}>
                                <Text style={styles.menuPrice}>₹ 500</Text>
                            </View>
                        </View>
                        <View style={styles.acoTabDetailRow}>
                            <View style={styles.acoTabDetailCol}>
                                <Image 
                                source={require('../../assets/images/icons8-non-vegetarian-food-symbol-50.png')}
                                style={styles.vegIcon}
                                />
                                <Text style={styles.menuTitle}>1 X Idli Sambhar</Text>
                            </View>
                            <View style={styles.acoTabDetailCol}>
                                <Text style={styles.menuPrice}>₹ 500</Text>
                            </View>
                        </View>
                        <View style={styles.acoTabDetailRow}>
                            <View style={styles.acoTabDetailCol}>
                                <Image 
                                source={require('../../assets/images/icons8-non-vegetarian-food-symbol-50.png')}
                                style={styles.nonVegIcon}
                                />
                                <Text style={styles.menuTitle}>1 X Chicken Tikka</Text>
                            </View>
                            <View style={styles.acoTabDetailCol}>
                                <Text style={styles.menuPrice}>₹ 500</Text>
                            </View>
                        </View>
                        <View style={styles.acoTabDetailRow}>
                            <View style={styles.acoTabDetailCol}>
                                <Image 
                                source={require('../../assets/images/icons8-non-vegetarian-food-symbol-50.png')}
                                style={styles.nonVegIcon}
                                />
                                <Text style={styles.menuTitle}>1 X Chicken Soup</Text>
                            </View>
                            <View style={styles.acoTabDetailCol}>
                                <Text style={styles.menuPrice}>₹ 500</Text>
                            </View>
                        </View>
                        <View style={styles.acoTabDetailRow}>
                            <View style={styles.acoTabDetailCol}>
                                <Image 
                                source={require('../../assets/images/icons8-non-vegetarian-food-symbol-50.png')}
                                style={styles.nonVegIcon}
                                />
                                <Text style={styles.menuTitle}>1 X Chicken Tandoori</Text>
                            </View>
                            <View style={styles.acoTabDetailCol}>
                                <Text style={styles.menuPrice}>₹ 500</Text>
                            </View>
                        </View>
                </View>
                <View style={styles.totalView}>
                    <Text style={styles.totalViewTitle}>Total Bill</Text>
                    <View style={styles.cardSubHeaderRight}>
                        <Text style={styles.cardSubHeaderRightText}>
                            PAID
                        </Text>
                    </View>
                    <Text style={styles.totalViewTitle}>₹ 3,000</Text>
                </View>
                <View style={styles.footerView}>
                    <Image 
                    source={require("../../assets/images/printer.png")}
                    style={styles.printer}
                    />
                    <Text style={styles.footerText}>
                        Print Bill
                    </Text>
                </View>
            </View>
        </ScrollView>
    </BgView>
  );
}