import { Text, UnorderedList, ListItem, Heading } from "@chakra-ui/react";
import Media from "../../components/Media";

const topicSummaryArr = [
  // Start of 1st trimester
  {
    id: "/trimester-1/summary",
    title: "What to expect - 1st trimester",
    content: (
      <>
        <Text className="topic_text">
          The first trimester is the first 12 weeks of your pregnancy, where
          your body will go through many changes for example you may find more
          twinges or ligament pain and your emotions might be up and down, or
          maybe you feel more weepy than usual too, due to the increase of
          hormones supporting your baby’s growth and preparing for birth.
          Commons Signs and Symptoms of early pregnancy
        </Text>
        <UnorderedList>
          <ListItem> Missed period </ListItem>
          <ListItem> MetalListItemc taste </ListItem>
          <ListItem> Nausea/Morning sickness </ListItem>
          <ListItem> Tiredness </ListItem>
          <ListItem> Heightened sense of smell </ListItem>
          <ListItem> Peeing more frequently </ListItem>
          <ListItem> A milky white discharge from the vagina </ListItem>
          <ListItem> Cramping ListItemght period pains </ListItem>
          <ListItem>
            ListItemght spotting – implantation bleed (seek advice if you are
            not sure)
          </ListItem>
          <ListItem>
            Darkened skin on your face or brown patches – ‘Mask of pregnancy’
          </ListItem>
          <ListItem> Bloating </ListItem>
          <ListItem> Thicker and shiny hair </ListItem>
        </UnorderedList>
        <Text className="topic_text">
          Remember everyone’s pregnancy journey is different, you may have a lot
          of these symptoms, or you may only have a few, any questions contact
          your healthcare professional for further advice. Please look at the
          additional resources for further reading.
        </Text>
      </>
    ),

    resources: [
      {
        author: "NHS",
        src: "https://www.nhs.uk/pregnancy/trying-for-a-baby/signs-and-symptoms-of-pregnancy/",
        title: "Signs and symptoms of pregnancy",
        topic: ["summary"],
        trimesterRelated: [1],
      },
      {
        author: "NHS",
        src: "https://www.nhs.uk/start4life/pregnancy/week-by-week/1st-trimester/week-4/#anchor-tabs",
        title: "Week-by-week guide to pregnancy",
        topic: ["summary"],
        trimesterRelated: [1],
      },
      {
        author: "NHS",
        src: "https://www.nct.org.uk/pregnancy/how-you-might-be-feeling/pregnancy-hormones-progesterone-oestrogen-and-mood-swings",
        title: "Mood Swings",
        topic: ["summary"],
        trimesterRelated: [1],
      },
    ],
  },
  {
    id: "/trimester-2/summary",
    title: "What to expect - 2nd trimester",
    content: (
      <>
        <Text className="topic_text">
          You are now in your second trimester, so hopefully you are starting to
          feel much better from the early pregnancy symptoms you may have been
          experiencing and starting to enjoy foods again! You may notice body
          changes, that your baby bump is growing, and you may start to feeling
          flutters of your baby’s movements from 16 weeks of your pregnancy; but
          you may also notice new pregnancy symptoms for this period. New
          pregnancy symptoms:
        </Text>
        <UnorderedList>
          <ListItem> Mild swelling of the ankles and feet</ListItem>
          <ListItem> Congestion</ListItem>
          <ListItem> Sensitive/bleeding gums</ListItem>
          <ListItem> Leg cramps</ListItem>
          <ListItem> Ligament pain around your abdomen</ListItem>
          <ListItem> Varicose veins</ListItem>
          <ListItem> Weight gain</ListItem>
        </UnorderedList>
      </>
    ),

    resources: [
      {
        author: "Marla Masters",
        src: "https://www.whattoexpect.com/second-trimester-of-pregnancy.aspx",
        title: "Your guide to the second trimester of pregnancy",
        topic: ["summary"],
        trimesterRelated: [2],
      },
      {
        author: "Nina Cumberbatch",
        src: "https://www.baby-chick.com/what-black-women-should-know-about-the-second-trimester/",
        title: "What Black Women should know about the Second trimester",
        topic: ["summary"],
        trimesterRelated: [2],
      },
      {
        author: "NHS",
        src: "https://www.nhs.uk/start4life/pregnancy/week-by-week/2nd-trimester/week-13/",
        title: "Week-by-week Pregnancy",
        topic: ["summary"],
        trimesterRelated: [2],
      },
    ],
  },
  {
    id: "/trimester-3/summary",
    title: "What to expect - 3rd trimester",
    content: (
      <>
        <Text className="topic_text">
          You are finally into the last stages of your pregnancy, here you maybe
          feeling a lot more aches and pains especially lower back and your hips
          due to your growing baby.
        </Text>
      </>
    ),

    resources: [
      {
        author: "NHS",
        src: "https://www.nhs.uk/start4life/pregnancy/week-by-week/3rd-trimester/week-28/",
        title: "Week 28 – Your Third Trimester",
        topic: ["summary"],
        trimesterRelated: [3],
      },
    ],
  },
  {
    id: "/trimester-1/exercise",
    title: "First Trimester: Exercises",
    content: (
      <>
        <Text className="topic_text">
          To keep yourself healthy during your pregnancy is to exercise, there
          is no evidence that shows that exercising during your pregnancy is
          harmful to the women and their babies who are healthy. Benefits of
          being active during pregnancy:
          <UnorderedList>
            <ListItem>It can reduce your blood pressure</ListItem>
            <ListItem>It can improve your fitness and energy levels</ListItem>
            <ListItem>It can help prevent diabetes in pregnancy</ListItem>
            <ListItem>It can help control your weight gain</ListItem>
            <ListItem>It can improve your sleep</ListItem>
            <ListItem>It can improve posture/balance</ListItem>
            <ListItem>Decrease stress, anxiety, and tension</ListItem>
            <ListItem>Increase your mood positively</ListItem>
          </UnorderedList>
          The UK Government guideline for being active during your pregnancy is
          to do 150 minutes of exercise per week, but don’t panic you do not
          have to do it all at once. If you do not exercise or it has been a
          while, you can start off by doing 10 minutes of daily walking and
          gradually increase the to build to 150 minutes per week. Always listen
          to your body and the rule is you should be able to talk whilst
          exercising if you can’t then you should slow down and rest. Other
          exercises you can do:
          <UnorderedList>
            <ListItem>Jogging/Running</ListItem>
            <ListItem>swimming</ListItem>
            <ListItem>Pregnancy Yoga/Pilates</ListItem>
            <ListItem>Low impact aerobics/ water aerobics</ListItem>
            <ListItem>Pelvic floor exercises</ListItem>
            <ListItem>Stationary cycling</ListItem>
            <ListItem>Low intensity free weight training</ListItem>
          </UnorderedList>
          Exercises to avoid:
          <UnorderedList>
            <ListItem>
              Any exercises that have you laying on your back for more than a
              few minutes, particularly after 16 weeks of pregnancy
            </ListItem>

            <ListItem>
              Martial arts, football, rugby, tennis, squash, horse-riding,
              skiing, or gymnastics as this increase the risk of your baby bump
              being hit. Warning signs whilst exercising:
            </ListItem>

            <ListItem>Dizziness/light-headedness</ListItem>
            <ListItem>Headaches (severe or prolonged)</ListItem>
            <ListItem>Chest pain</ListItem>
            <ListItem>Muscle weakness</ListItem>
            <ListItem>Pain/swelling in calves (occurring suddenly)</ListItem>
            <ListItem>Decreased fetal movement</ListItem>
            <ListItem>Vaginal bleeding</ListItem>
            <ListItem>Amniotic fluid/ waters leaking</ListItem>
            <ListItem>Pre-term labour</ListItem>
          </UnorderedList>
        </Text>
        <Heading as="h2">Abdominal exercise</Heading>
        <iframe
          src="https://www.youtube.com/embed/OnkIeuJe95M"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <Text className="topic_text">
          Note: It is important to during pregnancy to make sure that you get
          your midwife’s or doctor’s advice of whether you should exercise
          during this time especially if you have a high-risk pregnancy. The
          foetus is small in the first trimester, so you are unlikely to
          experience any issues with your abdominal muscles, but it is still
          important for you to strengthen this area for the stability of your
          pelvis and your back, as the your body changes to accommodate a
          growing baby.
        </Text>
      </>
    ),

    resources: [
      {
        author: "NHS",
        src: "https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/1054538/physical-activity-for-pregnant-women.pdf",
        title: "Physical Activity for Pregnant women",
        topic: ["exercise"],
        trimesterRelated: [1],
      },
      {
        author: "NHS",
        src: "https://www.nhs.uk/start4life/pregnancy/exercising-in-pregnancy/",
        title: "Exercising in pregnancy",
        topic: ["exercise"],
        trimesterRelated: [1],
      },

      {
        author: "Colleen de Bellefonds",
        src: "https://www.whattoexpect.com/pregnancy/exercise-benefits",
        title: "Benefits of Exercise during pregnancy",
        topic: ["exercise"],
        trimesterRelated: [1],
      },
      {
        author: "NHS",
        src: "www.nhs.uk/pregnancy/keeping-well/exercise/",
        title: "Exercise in pregnancy",
        topic: ["exercise"],
        trimesterRelated: [1],
      },
      {
        author: "Elea Carey",
        src: "https://www.healthline.com/health/pregnancy/first-trimester-exercise-fitness",
        title: "Exercising in the first trimester: How to do it safely",
        topic: ["exercise"],
        trimesterRelated: [1],
      },
    ],
  },
  {
    id: "/trimester-1/nutrition",
    title: "Healthy Eating - 1st trimester",
    content: (
      <>
        <Text className="topic_text">
          It is important that you can eat healthy during pregnancy as it helps
          baby grow, and there no need to ‘eat for two’. By making sure that you
          are eating a variety of food groups with a mixture of proteins,
          carbohydrates, fruits, and vegetables along with keeping yourself
          hydrated with water and eating breakfast, lunch and dinner will give
          you what you will need. It may be a challenge if you are experiencing
          nausea or morning sickness, or even being put off some of your
          favourite foods before pregnancy, so maybe try eating a little and
          often the chart below shows how what familiar foods that are great for
          you and baby, but also remember to your folic acid so that baby will
          develop and prevent neural tube defects for example spina bifada.
        </Text>
        <Media
          mediaType="image"
          mediaSrc="https://www.fountainmedical.co.uk/wp-content/uploads/sites/290/2021/10/AfricanCaribbeanEatwell-e1635149697112-1024x716.png"
          height={"auto"}
          width={"100%"}
        />
      </>
    ),

    resources: [
      {
        author: "NHS",
        src: "https://www.nhs.uk/pregnancy/trying-for-a-baby/signs-and-symptoms-of-pregnancy/",
        title: "Signs and Symptoms of pregnancy",
        topic: ["nutrition"],
        trimesterRelated: [1],
      },
      {
        author: "Start4life",
        src: "https://www.mhs.uk/start4life/pregnancy/week-by-week/1st-trimester/week4/#anchor-tabs",
        title: "Signs and Symptoms of pregnancy",
        topic: ["nutrition"],
        trimesterRelated: [1],
      },
      {
        author: "NCT",
        src: "https://www.nct.org.uk/pregnancy/how-you-might-be-feeling/pregnancy-hormones-progesterone-oestrogen-and-mood-swings",
        title:
          "Pregnancy hormones: progesterone, oestrogen and the mood swings",
        topic: ["nutrition"],
        trimesterRelated: [1],
      },
      {
        author: "British Heart Foundation",
        src: "https://nhsforthvalley.com/wp-content/uploads/2021/11/g503_tradtional_foods_healthy_dishes.pdf ",
        title: "Traditional foods - Healthy Dishes",
        topic: ["nutrition"],
        trimesterRelated: [1],
      },
      {
        author: "Heart UK",
        src: "https://www.heartuk.org.uk/healthy-diets/heart-healthy-african-and-caribbean-diets-",
        title: "Heart Helathy African and Carribbean diets",
        topic: ["nutrition"],
        trimesterRelated: [1],
      },
    ],
  },
  {
    id: "/trimester-1/wellbeing",
    title: "Well-being - 1st trimester",
    content: (
      <>
        <Text className="topic_text">
          Early pregnancy can be a journey of mixed emotions, excitement,
          anxiety or low energy, so to help combat this it is important to take
          care of ourselves as much as possible. As black women we tend to take
          on a lot of extra responsibilities, with other members of the family,
          work other than ourselves. Selfcare can be many things, like taking
          time out, sitting quietly and practice breathing techniques, listening
          to a relaxing meditation, writing down your feelings in a journal if
          you are having a challenging time or write what you are grateful for.
          Selfcare tips:
          <UnorderedList>
            <ListItem>Read a book/blog</ListItem>
            <ListItem>Listen to your favourite podcast</ListItem>
            <ListItem>Watch your favourite film</ListItem>
            <ListItem>Breathing exercises</ListItem>
            <ListItem>
              Create healthy boundaries with people and yourself
            </ListItem>
            <ListItem>Take a walk-in nature</ListItem>
          </UnorderedList>
        </Text>
      </>
    ),

    resources: [
      {
        author: "NHS",
        src: "https://www.nhs.uk/pregnancy/keeping-well/mental-health/",
        title: "Keeping well in pregnancy and mental health",
        topic: ["wellbeing"],
        trimesterRelated: [1],
      },
      {
        author: "Dear Black Women",
        src: "https://dearblackwomenproject.com",
        title: "Dear Black Women",
        topic: ["wellbeing"],
        trimesterRelated: [1],
      },
      {
        author: "Black Minds Matter",
        src: "https://www.blackmindsmatteruk.com/",
        title: "Black Minds Matter",
        topic: ["wellbeing"],
        trimesterRelated: [1],
      },
      {
        author: "The Black African and Asian Therapy Network",
        src: "https://www.baatn.org.uk/",
        title: "The Black African and Asian Therapy Network",
        topic: ["wellbeing"],
        trimesterRelated: [1],
      },
    ],
  },

  // End of 1st trimester
  // =====================
  {
    id: "/trimester-2/summary",
    title: "What to expect - 2nd trimester",
    content: (
      <>
        <Text className="topic_text">
          You are now in your second trimester, so hopefully you are starting to
          feel much better from the early pregnancy symptoms you may have been
          experiencing and starting to enjoy foods again! You may notice body
          changes, that your baby bump is growing, and you may start to feeling
          flutters of your baby’s movements from 16 weeks of your pregnancy; but
          you may also notice new pregnancy symptoms for this period. New
          pregnancy symptoms:
          <UnorderedList>
            <ListItem> Mild swelling of the ankles and feet</ListItem>
            <ListItem> Congestion</ListItem>
            <ListItem> Sensitive/bleeding gums</ListItem>
            <ListItem> Leg cramps</ListItem>
            <ListItem> Ligament pain around your abdomen</ListItem>
            <ListItem> Varicose veins</ListItem>
            <ListItem> Weight gain</ListItem>
          </UnorderedList>
        </Text>
      </>
    ),

    resources: [
      {
        author: "Marla Masters",
        src: "https://www.whattoexpect.com/second-trimester-of-pregnancy.aspx",
        title: "Your guide to the second trimester of pregnancy",
        topic: ["summary"],
        trimesterRelated: [2],
      },
      {
        author: "Nina Cumberbatch ",
        src: "https://www.baby-chick.com/what-black-women-should-know-about-the-second-trimester/",
        title: "What Black Women should know about the Second trimester",
        topic: ["summary"],
        trimesterRelated: [2],
      },
      {
        author: "NHS",
        src: "https://www.nhs.uk/start4life/pregnancy/week-by-week/2nd-trimester/week-13/",
        title: "Week-by-week Pregnancy",
        topic: ["summary"],
        trimesterRelated: [2],
      },
    ],
  },

  {
    id: "/trimester-2/exercise",
    title: "Exercises - 2nd trimester",
    content: (
      <>
        <iframe
          src="https://www.youtube.com/embed/PAh8ZF8R3LA"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <Text className="topic_text">
          Why not try yoga for a more gentle and relaxing way of moving
          especially if you are experiencing ligament pain around your pelvis
          and abdomen area. Opting for low -impact exercises such as swimming
          and walking, may help reduce the risk of contact with your baby bump
          or/and falling. For those who would like to continue with workout
          routines, remember to seek advice from your midwife or doctor.
        </Text>
      </>
    ),
    resources: [
      {
        author: "magdacivilfitness.com",
        src: "https://www.youtube.com/watch?v=x4uH6sX15bU",
        title: "Pregnancy workout: 2nd Trimester for anyone 23 weeks",
        topic: ["exercise"],
        trimesterRelated: [2],
      },
      {
        author: "BrownYogiGirl",
        src: "https://www.youtube.com/watch?v=JFiP-q1Jp18 ",
        title: "Everyday prenatal yoga | Pregnancy yoga for all trimesters",
        topic: ["exercise"],
        trimesterRelated: [2],
      },
      {
        author: "Medically reviewed by Debra Rose Wilson Ph.D",
        src: "https://www.healthline.com/health/pregnancy/second-trimester-exercise-fitness?utm_source=ReadNext",
        title: "What Exercises are safe in the second trimester?",
        topic: ["exercise"],
        trimesterRelated: [2],
      },
    ],
  },

  {
    id: "/trimester-2/nutrition",
    title: "Nutrition - 2nd trimester",
    content: (
      <>
        <Text className="topic_text">
          Continue to focus on food groups rather than calorie intake, why not
          try adding more beans and pulses to your foods. You may find it easier
          to batch cook to make sure that you get all the nutrients that you and
          your baby need to continue growing. Have you begun to crave different
          and strange foods? It may that you are craving more sugary or salty
          foods, even foods that you have not liked before.
        </Text>
      </>
    ),
    resources: [
      {
        author: "Lora O’Brian",
        src: "https://eluxemagazine.com/recipes/vegan-carribean-recipes/",
        title: "Vegan Caribbean recipes the taste like sunshine",
        topic: ["nutrition"],
        trimesterRelated: [2],
      },
    ],
  },

  {
    id: "/trimester-2/wellbeing",
    title: "Well-being - 2nd trimester",
    content: (
      <>
        <iframe
          src="https://www.youtube.com/embed/atywJYp-a70"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <Text className="topic_text">
          Emotionally the second trimester can be more of a sigh of relief
          compared to the ups and downs of the first trimester. However, some
          women can still experience some anxiety due to worries and fears about
          their growing baby until the results of their scan. You may have more
          thoughts of being mother/parents as you will notice more how your body
          has changed since the first trimester. As women from our culture, we
          are seen as people who are always strong and can handle anything and
          may not take notice how feeling down or even depressed about our
          pregnancy feelings should be taken seriously. If you don’t know where
          to start, try some affirmations (positive statements to challenge
          negative thoughts)
        </Text>
      </>
    ),
    resources: [
      {
        author: " Valinda Riggins Nwadike",
        src: "https://greatist.com/health/pregnancy-mood-swings",
        title: "Baby Got You Wack? Here’s What’s Up with Pregnancy Mood Swings",
        topic: ["wellbeing"],
        trimesterRelated: [2],
      },
      {
        author: "NHS",
        src: " https://www.nhs.uk/pregnancy/support/feelings-and-relationships/#:~:text=Your%20feelings,about%20mental%20health%20in%20pregnancy.",
        title: "Feelings, Relationships and pregnancy",
        topic: ["wellbeing"],
        trimesterRelated: [2],
      },
      {
        author: "Guys and St Thomas’s",
        src: "https://www.guysandstthomas.nhs.uk/news/support-pregnant-black-women",
        title: "Support for Pregnant black women",
        topic: ["wellbeing"],
        trimesterRelated: [2],
      },
    ],
  },
  // End of 2nd trimester
  // ====================
  {
    id: "/trimester-3/summary",
    title: "What to expect - 3rd trimester",
    content: (
      <>
        <Text className="topic_text">
          You are finally into the last stages of your pregnancy, here you maybe
          feeling a lot more aches and pains especially lower back and your hips
          due to your growing baby.
        </Text>
      </>
    ),
    resources: [
      {
        author: "Better Health – Start4Life",
        src: "https://www.nhs.uk/start4life/pregnancy/week-by-week/3rd-trimester/week-28/",
        title: "Week 28 – Your Third Trimester",
        topic: ["summary"],
        trimesterRelated: [3],
      },
    ],
  },

  {
    id: "/trimester-3/exercise",
    title: "Exercise - 3rd trimester",
    content: (
      <>
        <iframe
          src="https://www.youtube.com/embed/SVMRCH5CpGA"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <Text className="topic_text">
          As your pregnancy progresses you may notice that you are feeling a
          little bit more uncomfortable and exercising may be a challenge, keep
          to low impact exercises like walking, swimming or try gentle
          stretching, yoga or pilates. If you are more advanced in your fitness,
          continue as long as you feel comfortable, why not try a dance workout!
        </Text>
      </>
    ),
    resources: [
      {
        author: "LOVVE SAMMAY @lovvesammay",
        src: " https://www.youtube.com/watch?v=w6R7A3rHvlk",
        title: "Pregnancy Workout Full Body 3 rd Trimester",
        topic: ["exercise"],
        trimesterRelated: [3],
      },
      {
        author: "Tommy’s.org",
        src: "https://www.tommys.org/pregnancy-information/im-pregnant/exercise-in-pregnancy/how-active-should-i-be-pregnancy#:~:text=In%20the%20third%20trimester%20(weeks,to%20reduce%20aches%20and%20pains.",
        title: "Exercising in pregnancy",
        topic: ["exercise"],
        trimesterRelated: [3],
      },
      {
        author: "Erika L Harper",
        src: "https://www.blackwomenhealingretreats.com/publication/the-importance-of-exercising-for-black-women",
        title: "The importance of exercising for black Women",
        topic: ["exercise"],
        trimesterRelated: [3],
      },
    ],
  },
  {
    id: "/trimester-3/nutrition",
    title: "Healthy Eating - 3rd trimester",
    content: (
      <>
        <Text className="topic_text">
          Now that we are in the last stages of your pregnancy, you may find
          that your energy levels are dipping slightly, so its important that
          you choose foods that replace this. Continue to eat from the food
          groups which cover nutrients needed but continue to avoid or try and
          limit your intake of high sugary foods, like fizzy drinks, chocolate,
          and cakes.
        </Text>
      </>
    ),
    resources: [],
  },
  {
    id: "/trimester-3/wellbeing",
    title: "Well-being - 3rd trimester",
    content: (
      <>
        <Text className="topic_text">
          You are finally into the last stages of your pregnancy, here you maybe
          feeling a lot more aches and pains especially lower back and your hips
          due to your growing baby.
        </Text>
      </>
    ),
    resources: [],
  },
];

export default topicSummaryArr;
