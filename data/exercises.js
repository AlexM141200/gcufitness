const exercises = [
    {
        "id": 1,
        "name": "Squat",
        "equipment_needed": ["Barbell", "Squat Rack"],
        "body_parts_worked": ["Quadriceps", "Hamstrings", "Glutes"],
        "exerciseType": "Strength",
        "how_to_perform_exercise": [
            "Stand with feet shoulder-width apart and barbell resting on upper back.",
            "Lower hips back and down, keeping knees behind toes.",
            "Push through heels to return to starting position."
        ],
        "youtube_link": "https://www.youtube.com/watch?v=U3h_gzdeHkM"
    },
    {
        "id": 2,
        "name": "Deadlift",
        "equipment_needed": ["Barbell", "Weight Plates"],
        "body_parts_worked": ["Back", "Glutes", "Hamstrings"],
        "exerciseType": "Strength",
        "how_to_perform_exercise": [
            "Stand with feet shoulder-width apart and barbell on floor in front of you.",
            "Bend knees and grab bar with hands shoulder-width apart.",
            "Lift bar by straightening legs and raising torso."
        ],
        "youtube_link": "https://www.youtube.com/watch?v=op9kVnSso6Q"
    },
    {
        "id": 3,
        "name": "Bench Press",
        "equipment_needed": ["Barbell", "Bench", "Weight Plates"],
        "body_parts_worked": ["Chest", "Shoulders", "Triceps"],
        "exerciseType": "Strength",
        "how_to_perform_exercise": [
            "Lie on bench with feet flat on floor and barbell over chest.",
            "Lower bar to chest, keeping elbows close to body.",
            "Press bar up to starting position."
        ],
        "youtube_link": "https://www.youtube.com/watch?v=SCVCLChdDfo"
    },
    {
        "id": 4,
        "name": "Overhead Press",
        "equipment_needed": ["Barbell", "Rack"],
        "body_parts_worked": ["Shoulders", "Triceps"],
        "exerciseType": "Strength",
        "how_to_perform_exercise": [
            "Stand with feet shoulder-width apart and barbell resting on upper chest.",
            "Press bar overhead, keeping elbows close to body.",
            "Lower bar to starting position."
        ],
        "youtube_link": "https://www.youtube.com/watch?v=wol7Hko8RhY"
    },
    {
        "id": 5,
        "name": "Pull-Up",
        "equipment_needed": ["Pull-Up Bar"],
        "body_parts_worked": ["Back", "Biceps"],
        "exerciseType": "Strength",
        "how_to_perform_exercise": [
            "Hang from pull-up bar with hands shoulder-width apart.",
            "Pull body up to bar, keeping elbows close to body.",
            "Lower body to starting position."
        ],
        "youtube_link": "https://www.youtube.com/watch?v=eGo4IYlbE5g"
    },
    {
        "id": 6,
        "name": "Push-Up",
        "equipment_needed": [],
        "body_parts_worked": ["Chest", "Triceps", "Shoulders"],
        "exerciseType": "Strength",
        "how_to_perform_exercise": [
            "Start in plank position with hands slightly wider than shoulder-width apart.",
            "Lower body to ground, keeping elbows close to body.",
            "Push body back up to plank position."
        ],
        "youtube_link": "https://www.youtube.com/watch?v=_l3ySVKYVJ8"
    },
    {
        "id": 7,
        "name": "Dumbbell Curl",
        "equipment_needed": ["Dumbbells"],
        "body_parts_worked": ["Biceps"],
        "exerciseType": "Strength",
        "how_to_perform_exercise": [
            "Stand with feet shoulder-width apart and dumbbells in hands.",
            "Curl dumbbells up to shoulders, keeping elbows close to body.",
            "Lower dumbbells to starting position."
        ],
        "youtube_link": "https://www.youtube.com/watch?v=kwG2ipFRgfo"
    },
    {
        "id": 8,
        "name": "Dumbbell Fly",
        "equipment_needed": ["Dumbbells", "Bench"],
        "body_parts_worked": ["Chest"],
        "exerciseType": "Strength",
        "how_to_perform_exercise": [
            "Lie on bench with dumbbells over chest and arms extended.",
            "Lower dumbbells to sides, keeping elbows slightly bent.",
            "Raise dumbbells back to starting position."
        ],
        "youtube_link": "https://www.youtube.com/watch?v=JZQA08SlJnM"
    },
    {
        "id": 9,
        "name": "Lunges",
        "equipment_needed": [],
        "body_parts_worked": ["Quadriceps", "Hamstrings", "Glutes"],
        "exerciseType": "Strength",
        "how_to_perform_exercise": [
            "Stand with feet shoulder-width apart and hands on hips.",
            "Step forward with one leg and lower body until knee is bent at 90-degree angle.",
            "Push through front heel to return to starting position."
        ],
        "youtube_link": "https://www.youtube.com/watch?v=rMvwVtlqjTE"
    },
    {
        "id": 10,
        "name": "Plank",
        "equipment_needed": [],
        "body_parts_worked": ["Core"],
        "exerciseType": "Strength",
        "how_to_perform_exercise": [
            "Start in push-up position with arms extended.",
            "Lower body to forearms and hold position for desired time."
        ],
        "youtube_link": "https://www.youtube.com/watch?v=ASdvN_XEl_c"
    },
    {
        "id": 11,
        "name": "Russian Twist",
        "equipment_needed": ["Medicine Ball"],
        "body_parts_worked": ["Core"],
        "exerciseType": "Strength",
        "how_to_perform_exercise": [
            "Sit on floor with knees bent and feet flat on ground.",
            "Lean back slightly and twist torso to one side, touching medicine ball to ground.",
            "Twist torso to other side, touching medicine ball to ground."
        ],
        "youtube_link": "https://www.youtube.com/watch?v=Jgl58bO7yFw"
    },
    {
        "id": 12,
        "name": "Calf Raise",
        "equipment_needed": ["Dumbbells", "Step"],
        "body_parts_worked": ["Calves"],
        "exerciseType": "Strength",
        "how_to_perform_exercise": [
            "Stand on edge of step with heels hanging off.",
            "Raise heels as high as possible and hold for a moment.",
            "Lower heels back to starting position."
        ],
        "youtube_link": "https://www.youtube.com/watch?v=5V7DDlORxrQ"
    },
    {
        "id": 13,
        "name": "Barbell Row",
        "equipment_needed": ["Barbell"],
        "body_parts_worked": ["Back"],
        "exerciseType": "Strength",
        "how_to_perform_exercise": [
            "Stand with feet shoulder-width apart and barbell in hands.",
            "Bend knees slightly and bend over at waist, keeping back straight .",
            "Pull barbell up to chest, keeping elbows close to body.",
            "Lower barbell back to starting position."
        ],
        "youtube_link": "https://www.youtube.com/watch?v=IzoCFtKcSd0"
    },
    {
        "id": 14,
        "name": "Tricep Extension",
        "equipment_needed": ["Dumbbells"],
        "body_parts_worked": ["Triceps"],
        "exerciseType": "Strength",
        "how_to_perform_exercise": [
            "Stand with feet shoulder-width apart and dumbbell in hands.",
            "Extend arm overhead, keeping elbow close to head.",
            "Lower dumbbell behind head, keeping elbow close to head.",
            "Raise dumbbell back to starting position."
        ],
        "youtube_link": "https://www.youtube.com/watch?v=tF5bVrCOp5E"
    },
    {
        "id": 15,
        "name": "Leg Press",
        "equipment_needed": ["Leg Press Machine"],
        "body_parts_worked": ["Quadriceps", "Hamstrings", "Glutes"],
        "exerciseType": "Strength",
        "how_to_perform_exercise": [
            "Sit on leg press machine with feet shoulder-width apart on platform.",
            "Lower platform until knees are bent at 90-degree angle.",
            "Push platform back up to starting position."
        ],
        "youtube_link": "https://www.youtube.com/watch?v=XsV_AQJtGq8"
    },
    {
        "id": 16,
        "name": "Hamstring Curl",
        "equipment_needed": ["Hamstring Curl Machine"],
        "body_parts_worked": ["Hamstrings"],
        "exerciseType": "Strength",
        "how_to_perform_exercise": [
            "Lie face down on hamstring curl machine with ankles hooked under bar.",
            "Curl bar up towards buttocks, keeping knees on pad.",
            "Lower bar back to starting position."
        ],
        "youtube_link": "https://www.youtube.com/watch?v=G9XlL-vS_Yw"
    },
    {
        "id": 17,
        "name": "Bent Over Row",
        "equipment_needed": ["Dumbbells"],
        "body_parts_worked": ["Back"],
        "exerciseType": "Strength",
        "how_to_perform_exercise": [
            "Stand with feet shoulder-width apart and dumbbells in hands.",
            "Bend knees slightly and bend over at waist, keeping back straight.",
            "Pull dumbbells up to chest, keeping elbows close to body.",
            "Lower dumbbells back to starting position."
        ],
        "youtube_link": "https://www.youtube.com/watch?v=U4BSZaL8bz4"
    },
    {
        "id": 18,
        "name": "Skull Crusher",
        "equipment_needed": ["E-Z Bar", "Weight Plates"],
        "body_parts_worked": ["Triceps"],
        "exerciseType": "Strength",
        "how_to_perform_exercise": [
            "Lie on bench with E-Z bar extended over chest.",
            "Lower bar behind head, keeping elbows close to head.",
            "Raise bar back to starting position."
        ],
        "youtube_link": "https://www.youtube.com/watch?v=-rh3MHnRI_I"
    },
    {
        "id": 19,
        "name": "Box Jump",
        "equipment_needed": ["Box"],
        "body_parts_worked": ["Legs", "Core"],
        "exerciseType": "Strength",
        "how_to_perform_exercise": [
            "Stand in front of box with feet shoulder-width apart.",
            "Jump onto box, landing with both feet.",
            "Step back down and repeat."
        ],
        "youtube_link": "https://www.youtube.com/watch ?v=8I-1UnGDt7E"
    },
    {
        "id": 20,
        "name": "Incline Bench Press",
        "equipment_needed": ["Barbell", "Bench", "Weight Plates"],
        "body_parts_worked": ["Chest", "Shoulders", "Triceps"],
        "exerciseType": "Strength",
        "how_to_perform_exercise": [
            "Lie on incline bench with feet flat on floor and barbell over chest.",
            "Lower bar to chest, keeping elbows close to body.",
            "Press bar up to starting position."
        ],
        "youtube_link": "https://www.youtube.com/watch?v=GzgGnjQ7HbQ"
    }

]

export default exercises;