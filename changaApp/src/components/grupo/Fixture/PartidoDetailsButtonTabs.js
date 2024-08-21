import React,{useState} from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, TouchableHighlight } from 'react-native'
import { FAB, Tab, TabView } from '@rneui/base'


const PartidoDetailsButtonTabs = () => {
    const [showModalTry,setShowModalTry] = useState(false)
    const [showModalPenal,setShowModalPenal] = useState(false)
    const [showModalTarjeta,setShowModalTarjeta] = useState(false)
    const [indexx,setIndexx] = useState(0)

  return (
    <>
      <View>
        <Tab
        value={indexx}
        onChange={(e) => setIndexx(e)}
        indicatorStyle={{
          backgroundColor:undefined,
        }}
        dense
  >

        <Tab.Item
          title="Trys"
          titleStyle={{ fontSize: 12 , color:"#fff"}}
          containerStyle={(active) => ({
            backgroundColor: active ? "#134c34" : "#555",
            borderRadius:50,
            marginTop:20,
          })}
          // buttonStyle={{width:50}}
        />
        <Tab.Item
        title="Recent"
        titleStyle={{ fontSize: 12 , color:"#fff"}}
        containerStyle={(active) => ({
          backgroundColor: active ? "#134c34" : "#555",
          borderRadius:50,
          marginTop:20
        })}

      />
        <Tab.Item
        title="Recent"
        titleStyle={{ fontSize: 12 , color:"#fff"}}
        containerStyle={(active) => ({
          backgroundColor: active ? "#134c34" : "#555",
          borderRadius:50,
          marginTop:20
        })}/>
      </Tab>
      <TabView  >

        <TabView.Item >
          <View sty>
              <Text>Hhh</Text>
          </View>
        </TabView.Item>

        <TabView.Item >
        <View >     
        <Text>Hhh</Text>
        </View>
        </TabView.Item>
        
        </TabView>
      </View>
    </>

  )
}

export default PartidoDetailsButtonTabs