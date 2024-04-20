# Airport Challenge

## Domain Models and Test Plan
Available on Miro board at https://miro.com/app/board/uXjVKSYJDag=/?share_link_id=767210795169

### User Story 1
**User Story**
<br>![User Story 1: As a traffic controller, I want to be able to know the capacity of the airport, so that I know how many planes our airport can hold](image.png)
<br><br>**Domain Model**
| Objects | Properties                | Messages           | Output  |
| ------- | ------------------------- | ------------------ | ------- |
| Airport   | - airportCapacity @Integer            | - getAirportCapacity()        | @Int |

**Test Plan**
- [ ] getAirportCapacity should return maxCapacity of airport as 10

### User Story 2
**User Story**
<br>![User Story 2: As a traffic controller, so that I know if the airport is full, I'd like to see when the capacity is at max](image-1.png)
<br>**Domain Model**
| Objects    | Properties | Messages    | Output |
| ----- | ----------- | --------- | ----------- |
| Airport    | airportPlanes @Array[@Item] <br>airportCapacity @Integer       | isAirportFull()    | @Boolean       |

**Test Plan**
- [ ] isAirportFull returns false when airport is not full
- [ ] isAirportFull returns true when airport is full

### User Story 3
**User Story**
<br>![User Story 3: As an admin user, I want to be able to expand the plane capacity of the airport, so that it can correctly report how many planes our airport can hold](image-2.png)
<br>**Domain Model**
| Objects | Properties | Messages | Output |
| ------- | ---------- | -------- | ------ |
| Airport  | airportCapacity @Integer <br>airportPlanes @Array[@Item]      | changeAirportCapacityTo(@Integer)   | @Void  |

**Test Plan**
- [ ] Change the airportCapacity to the number passed through by changeAirportCapacityTo
- [ ] airportCapacity should not decrease pass the amount of planes currently at airport

### User Story 4
**User Story**
<br>![User Story 4: As a traffic controller, I'd like to be able to instruct a plane to land when the airport isn't full, so the airport isn't crowded](image-3.png)
<br>**Domain Model**
| Objects | Properties | Messages | Output |
| ------- | ---------- | -------- | ------ |
| Airport  | airportPlanes @Array[@Plane] <br>airportCapacity @Integer      | landPlane(@Plane)  | @Void   |
| Plane  | id @String      |        |       |

**Test Plan**
- [ ] Add plane to airportPlanes using landPlane and expect array (airportPlanes) has increased in length by 1 when airport isn't full
- [ ] airportPlanes length should not increase by 1 if airport is full
- [ ] Test that plane passed to landPlane is actually added to the airportPlanes
- [ ] You are able to land a plane with other planes at airport
- [ ] Plane of null is not added to the airport

### User Story 5
**User Story**
<br>![User Story 5: As a traffic controller, I'd like to be able to instruct a plane to take off, so the I can make room for another plane](image-4.png)
<br>**Domain Model**
| Objects | Properties | Messages | Output |
| ------- | ---------- | -------- | ------ |
| Airport  | airportPlanes @Array[@Plane]      | takeOffPlane(@Plane)   | @Void  |
| Airport  | id @String      |        |       |

**Test Plan**
- [ ] Remove plane from airport and reduce airportPlanes length by 1
- [ ] Plane is not removed from airportPlanes if Plane doesn't exist in airportPlanes array

### User Story 6
**User Story**
<br>![User Story 6: As a traffic controller, so that I can maintain my sanity, I want to know if I try to land a plane that is already at the airport](image-5.png)
<br>**Domain Model**
| Objects | Properties | Messages | Output |
| ------- | ---------- | -------- | ------ |
| Airport  | airportPlanes @Array[@Plane]      | planeExistsInAirport(@Plane)   | @Boolean  |
| Plane  | id @String      |        |       |

**Test Plan**
- [ ] Check if planeExistsInAirport returns true if plane is currently at airport
- [ ] Check if planeExistsInAirport returns false if plane is not at airport
- [ ] If planeExistsInAirport returns true, don't land the plane

### User Story 7
**User Story**
<br>![User Story 7: As a traffic controller, I want know what planes are currently at the airport, so that I can maintain a record](image-6.png)
<br>**Domain Model**
| Objects | Properties | Messages | Output |
| ------- | ---------- | -------- | ------ |
| Airport  | airportPlanes @Array[@Plane]      | planesAtAirport()   | @Array  |
| Plane  | id @String      |        |       |

**Test Plan**
- [ ] planesAtAirport returns correct array of planes at airport

### User Story 8
**User Story**
<br>![User Story 8: As a traffic controller, I want know when the weather is stormy, so that I know what to tell pilots during take off or landing](image-7.png)
<br>**Domain Model**
| Objects | Properties | Messages | Output |
| ------- | ---------- | -------- | ------ |
| Weather  | weather @String     | isStormy()   | @Boolean  |

**Test Plan**
- [ ] Check isStormy returns true when the weather is stormy
- [ ] Check isStormy returns false when the weather is not stormy

### User Story 9
**User Story**
<br>![User Story 9: As a traffic controller, I want tell pilots not to land when the weather is stormy, so that we can wait till it is safe](image-8.png)
<br>**Domain Model**
| Objects | Properties | Messages | Output |
| ------- | ---------- | -------- | ------ |
| Weather  | weather @String     | isStormy()   | @Boolean  |
| Airport  | airportPlanes @Array[@Plane]      | landPlane(@Plane)   | @Void  |
| Plane  | id @String      |        |       |

**Test Plan**
- [ ] If isStormy returns true, landPlane should not add plane to airportPlanes array
- [ ] If isStormy returns false, landPlane should add plane to airportPlanes array

### User Story 10
**User Story**
<br>![User Story 10: As a traffic controller, I want tell pilots not to take off when the weather is stormy, so that we can delay the plane till it is safe to do so](image-9.png)
<br>**Domain Model**
| Objects | Properties | Messages | Output |
| ------- | ---------- | -------- | ------ |
| Weather  | weather @String     | isStormy()   | @Boolean  |
| Airport  | airportPlanes @Array[@Plane]      | takeOffPlane(@Plane)   | @Void  |
| Plane  | id @String      |        |       |

**Test Plan**
- [ ] If isStormy returns true, takeOffPlane should not remove plane from airportPlanes array
- [ ] If isStormy returns false, takeOffPlane should remove plane from airportPlanes array