import React from "react";
import { Chip, ListItem } from '@rneui/themed';
import { format } from 'date-fns';

const styles = {
    item: {
        padding: 10,
        fontSize: 16,
    },
    gameName: {
        fontWeight: 'bold',
        padding: 10,
        fontSize: 20,
    },
    platform: {
        marginHorizontal: 5,
        marginTop: 10,
    }
}

export default function ReleaseItem(props) {
    const platformsProp = props.item.fields.platforms || [];
    const releaseDate = props.item.fields.releaseDate;
    const formattedDate = releaseDate ? format(new Date(releaseDate), 'dd/MM/yyyy') : '';
    return (
        <ListItem>
            <ListItem.Content>
                <ListItem.Title style={styles.item}>
                    {formattedDate}
                </ListItem.Title>
                <ListItem.Subtitle style={styles.gameName}>
                    {props.item.fields.game}
                </ListItem.Subtitle>
                <ListItem.Subtitle>
                    {
                        platformsProp.map((returnedPlatform, index) => (
                            <Chip
                                key={index}
                                type="solid"
                                color={returnedPlatform.fields.colorCode}
                                buttonStyle={styles.platform}
                            >
                                { returnedPlatform.fields.shortName }
                            </Chip>
                        ))
                    }
                </ListItem.Subtitle>
            </ListItem.Content>
        </ListItem>
    )
}
