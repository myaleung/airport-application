# Airport Software - Challenge 1
## Introduction
This software has been developed to help solve the traffic flow of planes at the Digital Futures Airport and aid traffic controllers to know when to land a plane or release a plane for take off. The software would also know if a plane is currently at the airport and cover the scenario for when the airport is full.

### Benefits
The benefits this software will provide include,
* **Helping traffic controllers instruct a plane for takeoff and landing** - This is so duplicate planes are not landed at the airport and planes that don't exist are asked to take off.
* **Controlling the airport traffic flow and keeping capacity at a limit** - Therefore the capacity of the airport doesn't overflow and can expand where valid and necessary.
* **Knowing if the capacity is at maximum** - So traffic controllers know when not to land planes and can direct them elsewhere.
* **Able to instruct planes correctly when the weather is stormy** - The system will know not to land a plane or direct a plane for take off when there is a storm.

### Risks
There are some potential risks to this software including,
* **Plane IDs don't have any validation to check for consistency nor case sensitivity.** Therefore they may not match IDs in other software/programs in the network and the plane can be named anything and at any length.
* **The system doesn't account for different weather conditions or other possible disasters that may arise.** It currently only accounts for stormy weather conditions.
* **We cannot land or take off multiple planes at the same time.** Currently you can only prepare one plane for landing or take off in a queue.
* **Values in Airport class are accessible** which may cause problems in the future.

### Conclusion
The software encompasses all the requirements instructed by Digital Futures Airport and covers the basic needs. It can comfortably instruct planes for landing and take off and covers stormy weather conditions, but should also include the same for other adverse weather conditions. The programmed weather is currently randomised and can correctly instruct planes for take off and landing depending on the weather forecast. 
<br>The software is also able to let the user know when the airport is at max capacity, and able to also correctly increase or decrease the capacity level depending on the amount of planes currently at the airport. 
<br><br>If I were to refactor the code, I would make values in classes be private that can only be accessed via class methods to help build a better program. The system also randomises the weather during take off and landing, rather than setting it for the day. So there is a possiblity for planes not being able to land despite being called on the same day. The argument for this is that it could have been called at different times in the day. I also didn't want the program demo to not land or take off any planes if the airport's weather was set to stormy for that day.

## Install
`npm i`

## Run
`npm start` - Run the demo system<br>
`npm test` - Run the test program
