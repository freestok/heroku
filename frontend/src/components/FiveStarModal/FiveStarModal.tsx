import { Box, Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from '@chakra-ui/react';
import React, { FC, useEffect } from 'react';
import styles from './FiveStarModal.module.css';
import { VictoryAxis, VictoryBar, VictoryChart, VictoryLabel, VictoryTheme, VictoryTooltip } from 'victory';

interface FiveStartModalProps {
  ratings: any;
}


const FiveStarModal: FC<FiveStartModalProps> = ({ ratings }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  console.log('FiveStarModal ratings', ratings);
  useEffect(() => {
    console.log('useEffect FiveStarModal');
    let t = 1;

  }, [])


  return (
    <div className={styles.FiveStarModal}>
      <Button onClick={onOpen}>View All Ratings</Button>

      <Modal isOpen={isOpen} onClose={onClose} size='md'>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Ratings</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {/* <Bar options={options} data={data} />; */}
            {isOpen &&
            <VictoryChart
              // theme={VictoryTheme.grayscale}
              domainPadding={{ x: 50 }}
            >
              <VictoryBar horizontal
                data={ratings ? ratings: null}
                // data={[{"label":0,"star":1},{"label":0,"star":2},{"label":28.57,"star":3},{"label":28.57,"star":4},{"label":42.86,"star":5}]}
                // data={[{"label":"0.0%","star":1},{"label":"0.0%","star":2},{"label":"28.57%","star":3},{"label":"28.57%","star":4},{"label":"42.86%","star":5}]}
                // data={[{ "label": 0, "star": 1 }, { "label": 0, "star": 2 }, { "label": 28.57, "star": 3 }, { "label": 28.57, "star": 4 }, { "label": 42.86, "star": 5 }]}
                x='star'
                y='label'
                labels={(d) => d.star}
                labelComponent={<VictoryTooltip 
                  style={{ fill: "tomato" }}
                  text={d => d.data[d.index].label+'%'}/>}
                style={{
                  data: { fill: "#c43a31" }, 
                  labels: { fill: 'white'}
                }}
                animate={{
                  duration: 2000,
                  onLoad: { duration: 1000 }
                }}
              // data={sampleData}
              />
              <VictoryAxis
                label='Stars'
                tickValues={[1, 2, 3, 4, 5]}
                style={{
                  axisLabel: { padding: 30 }
                }} />
            </VictoryChart>
            }
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  )
};



export default FiveStarModal;
