import { Text, View } from "react-native";

const RepositoryItem = ({ repository }) => {
    return (
        <View>
            <Text>Fullname: {repository.fullName}</Text>
            <Text>Description: {repository.description}</Text>
            <Text>Language: {repository.language}</Text>
            <Text>Stars: {repository.stars}</Text>
            <Text>Forks: {repository.forks}</Text>
            <Text>Reviews: {repository.reviewCount}</Text>
            <Text>Rating: {repository.ratingAverage}</Text>
        </View>
    );

}

export default RepositoryItem;