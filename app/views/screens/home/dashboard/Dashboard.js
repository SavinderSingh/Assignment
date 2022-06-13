import { FlatList, RefreshControl, StyleSheet, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import BaseView from '../../../hoc/BaseView'
import SearchView from '../../../components/SearchView'
import CharacterItem from './items/CharacterItem'
import { getCharactersList } from '../../../../redux/actions/homeActions'

const Dashboard = props => {

    const baseViewRef = useRef(null)

    const dispatch = useDispatch()

    const [searchText, setSearchText] = useState('')
    const [list, setList] = useState([])
    const [isRefreshing, setIsRefreshing] = useState(false)
    const [pageLoading, setPageLoading] = useState(false)
    const [loadExtraData, setLoadExtraData] = useState(false)
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(0)

    useEffect(() => {
        _getCharactersList(page)
        return () => {
        };
    }, [])


    // getting list of characters from Rick & Morty API.
    const _getCharactersList = (index) => {
        setIsRefreshing(true)
        getCharactersList(index)
            .then(response => {
                setIsRefreshing(false)
                console.log('[Dashboard.js] getCharactersList : ',response)
                setTotalPages(response.info.pages)
                const _list = page === 1 ? response.results : [...list, ...response.results]
                setList(_list)
            })
            .catch(error => {
                setIsRefreshing(false)
                console.log('[Dashboard.js] getCharactersList error: ',error)
            })
    }

    //render character item
    const _renderItem = ({item,index}) => {
        return (
            <CharacterItem 
                item={item}
                index={index}
            />
        )
    }

    // load more data when reached at end.
    const _loadMoreData = () => {
        let _page = page+1
        if(page <= totalPages){
            console.log('[Dashboard.js] Loading more data : ',_page)
            setPage(_page);
            _getCharactersList(_page)
        }

    }


    return (
        <BaseView
            ref={baseViewRef}
            hasStatusBar
            hasHeader
            title={'Dashboard'}
        >
        <View style={styles.parent}>
            <SearchView 
                placeholder={'search your character here'}
                value={searchText}
                onChangeText={text => _onSearch(text)}
            />

            <FlatList 
                data={list}
                renderItem={_renderItem}
                keyExtractor = {(item,index) => item.id}
                refreshControl={
                    <RefreshControl 
                        onRefresh={_getCharactersList}
                        refreshing={isRefreshing}
                    />
                }
                contentContainerStyle={{paddingBottom:32}}
                onEndReachedThreshold={0}
                onEndReached={_loadMoreData}
            />
        </View>
        </BaseView>
    )
}

export default Dashboard

const styles = StyleSheet.create({
    parent : {
        flex:1,
        backgroundColor:'#F7F7F7',
    },
   
})