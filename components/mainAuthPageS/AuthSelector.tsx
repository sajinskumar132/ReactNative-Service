import { View, Text, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from '../../util/Styles/authSelectorStyle'

const AuthSelector = () => {
    return (
        <View style={styles.mainContainer} >
            <View>
                <Text style={styles.appName}>LLP Services</Text>
            </View>
            <TouchableOpacity>
                <View style={styles.Card}>
                    <Text style={styles.cardTitle}>Service Provider</Text>
                    <Text style={styles.cardDescription}>Service provider can add new services</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={styles.Card}>
                    <Text style={styles.cardTitle}>Service Needer</Text>
                    <Text style={styles.cardDescription}>Service needer can see services and book services</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default AuthSelector