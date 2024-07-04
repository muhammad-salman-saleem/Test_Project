function countOccurrences(arr) {
    const occurrences = {};
    arr.forEach(num => {
        occurrences[num] = (occurrences[num] || 0) + 1;
    });
    return occurrences;
}
const inputArray = [1, 3, 1, 5, 4, 3, 5, 5];
const output = countOccurrences(inputArray);
console.log(output); 

function removeConsecutiveABAfterC(inputStr) {
    let result = '';
    for (let i = 0; i < inputStr.length; i++) {
        result += inputStr[i];
        if (i >= 2 && inputStr[i - 2] === 'c' && inputStr.slice(i, i + 2) === 'ab') {
            i += 1;
        }
    }
    return result;
}

const inputString = "abcababcdabab";
const outputString = removeConsecutiveABAfterC(inputString);
console.log(outputString);

let networkTopology = {
    "building1": {
      "floor1": {
        "room1": {
          "device1": {
            "id": "A123",
            "status": "active"
          },
          "device2": {
            "id": "B456",
            "status": "inactive"
          }
        },
        "room2": {
          "device3": {
            "id": "C789",
            "status": "active"
          }
        }
      },
      "floor2": {
        "room3": {
          "device4": {
            "id": "D012",
            "status": "inactive"
          }
        }
      }
    },
    "building2": {
      "floor1": {
        "room4": {
          "device5": {
            "id": "E345",
            "status": "active"
          }
        }
      }
    }
  };
  
  function printActiveDevices(topology) {
    for (const buildingKey in topology) {
      const building = topology[buildingKey];
      for (const floorKey in building) {
        const floor = building[floorKey];
        for (const roomKey in floor) {
          const room = floor[roomKey];
          for (const deviceKey in room) {
            const device = room[deviceKey];
            if (device.status === "active") {
              console.log(device.id);
            }
          }
        }
      }
    }
  }
  
  console.log("Active devices in the entire network:");
  printActiveDevices(networkTopology);
  
  networkTopology["building1"]["floor2"]["room3"]["device4"]["status"] = "active";
  
  networkTopology["building2"]["floor1"]["room4"]["device6"] = {
    "id": "F678",
    "status": "inactive"
  };
  
  console.log("\nAfter updates:");
  console.log(networkTopology);
  


