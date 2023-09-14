import { FlatList } from "react-native";
import React from "react";
import ReleaseItem from "./ReleaseItem";
export default function ReleasesList(props) {
    return (
        <FlatList
            data={props.items}
            renderItem={
                ({item}) => (
                    <ReleaseItem item={item} />
                )
            }
        />
    )
}
