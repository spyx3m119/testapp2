import { ResourceList, Stack, TextStyle, Thumbnail } from "@shopify/polaris";
import React from "react";
import {
    ImagesMajor
  } from '@shopify/polaris-icons';

function ProductItem({product}) {
    console.log(product);
    const image = product.images[0] ? product.images[0].originalSrc : ImagesMajor;
    const media = <Thumbnail source={image} />;
    const price = product.variants[0].price
    return (
    <ResourceList.Item media={media} id={product.id} accessibilityLabel={`View details for ${product.title}`}>
        <Stack>
            <Stack.Item fill>
                <TextStyle variation='strong'> {product.title} </TextStyle>
            </Stack.Item>
            <Stack.Item>
                <p>${price}</p>
            </Stack.Item> 
        </Stack>
    </ResourceList.Item>
    );
}

export default ProductItem;