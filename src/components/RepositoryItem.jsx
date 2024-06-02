import { Image, StyleSheet, View } from "react-native";
import theme from "../theme";
import Text from './Text';

const RepositoryItem = ({ repository }) => {
    return (
        <View style={styles.container} testID="repositoryItem">
            <View style={styles.top}>
                <Image src={repository.ownerAvatarUrl} style={styles.avatar}/>  

                <View style={styles.ownerInfo}>
                    <Text fontWeight="bold" fontSize="subheading">{repository.fullName}</Text>
                    <Text style={styles.repoDescription}>{repository.description}</Text>

                    <View>
                        <Text style={styles.language}>{repository.language}</Text>
                    </View>
                </View>
            </View>

            <View style={styles.bottom}>
                <View>
                    <Text fontWeight="bold" style={styles.infoNumber}>
                        {
                            repository.stargazersCount >= 1000 ?
                            (repository.stargazersCount / 1000).toFixed(1) + 'k' :
                            repository.stargazersCount
                        }
                </Text>
                    <Text style={styles.infoTopic}>Stars</Text>
                </View>

                <View>
                    <Text fontWeight="bold" style={styles.infoNumber}>
                        {
                            repository.forksCount >= 1000 ?
                            (repository.forksCount / 1000).toFixed(1) + 'k' :
                            repository.forksCount
                        }
                        </Text>
                    <Text style={styles.infoTopic}>Forks</Text>
                </View>

                <View>
                    <Text fontWeight="bold" style={styles.infoNumber}>{repository.reviewCount}</Text>
                    <Text style={styles.infoTopic}>Reviews</Text>
                </View>

                <View>
                    <Text fontWeight="bold" style={styles.infoNumber}>{repository.ratingAverage}</Text>
                    <Text style={styles.infoTopic}>Rating</Text>
                </View>
            </View>
        </View>
    );

}

const styles = StyleSheet.create({
    container:{
        backgroundColor: theme.colors.secondaryBackground,
        padding: 20
    },

    top:{
        display: 'flex',
        flexDirection: 'row'
    },

    avatar:{
        width: 50,
        height: 50,
        borderRadius: 7
    },

    ownerInfo:{
        marginLeft: 15,
        flex: 1
    },

    repoDescription: {
        marginVertical: 10
    },

    language: {
        backgroundColor: theme.colors.primary,
        color: theme.colors.textSecondary,
        padding: 5,
        borderRadius: 5,
        alignSelf: 'flex-start'
    },

    bottom: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20
    },

    infoNumber: {
        textAlign: 'center'
    },

    infoTopic: {
        textAlign: 'center',
        color: theme.colors.darkGray
    }
})

export default RepositoryItem;