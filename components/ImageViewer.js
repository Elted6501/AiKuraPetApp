import { Image } from "react-native";

export default function ImageViewer({ placeholderImageSource, selectedImage }) {
    const imageSource = selectedImage  ? { uri: selectedImage } : placeholderImageSource;
  
    return <Image source={imageSource} style={styles.image} />;
  }

const styles = {
    image: {
        width: 200,
        height: 200,
        marginVertical: 10,
        borderRadius : 10,
    }
};