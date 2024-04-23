# Airport Software
## The Software
The software is to help solve the traffic flow of planes at the Digital Futures Airport and aid traffic controllers to know when to land a plane or release a plane for take off. The software would also know if a plane is currently at the airport and cover the scenario for when the airport is full.

## Benefits
The benefits this software will provide include,
* Helping traffic controllers instruct a plane for takeoff and landing - This is so duplicate planes are not landed at the airport and planes that don't exist are asked to take off.
* Controlling the airport traffic flow and keeping capacity at a limit - Therefore the capacity of the airport doesn't overflow and can expand where valid and necessary.
* Knowing how many planes are at the airport and if the capacity is at maximum - So traffic controllers know when not to land planes and can direct them elsewhere.

## Risks
There are some potential risks to this software including,
* Plane IDs are strings and don't have any validation to check for consistency nor case sensitivity. Therefore they may not match IDs in other software and the plane can be named anything.
* The system doesn't account for different weather conditions or other possible disasters that may arise. It only accounts for stormy weather conditions.
* We cannot land or take off multiple planes at the same time. Currently you can only prepare one plane for landing or take off in a queue.
* Values in Airport class are accessible which may cause problems in the future.