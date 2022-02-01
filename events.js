exports.events = [
    {
        screen: "splash_screen",
        event: [
            {
                name: "app_launch",
                properties: []
            }
        ]
    }, {
        screen: "login_screen",
        event: [
            {
                name: "login_otp_send",
                properties: [
                    {
                        name: "phone",
                        type: "string",
                        required: true
                    }, {
                        name: "utm_source",
                        type: "string"
                    }
                ]
            }, {
                name: "login",
                properties: [
                    {
                        name: "phone",
                        type: "string",
                        required: true
                    }, {
                        name: "utm_source",
                        type: "string"
                    }, {
                        name: "gender",
                        type: "string"
                    }
                ]
            }, {
                name: "registration",
                properties: [
                    {
                        name: "phone",
                        type: "string",
                        required: true
                    }, {
                        name: "utm_source",
                        type: "string"
                    }, {
                        name: "gender",
                        type: "string"
                    }
                ]
            }, {
                name: "login_otp_resend",
                properties: [
                    {
                        name: "phone",
                        type: "string",
                        required: true
                    }
                ]
            }, {
                name: "login_language_picker_submit",
                properties: [
                    {
                        name: "language",
                        type: "string",
                        required: true
                    }
                ]
            }
        ]
    }, {
        screen: "nps_screen",
        event: [
            {
                name: "nps_submit",
                properties: [
                    {
                        name: "nps_score",
                        type: "string"
                    }, {
                        name: "nps_complement",
                        type: "string"
                    }
                ]
            }
        ]
    }, {
        screen: "home_screen",
        event: [
            {
                name: "home_bottom_ticker_tap",
                properties: [
                    {
                        name: "slug",
                        type: "string"
                    }
                ]
            }, {
                name: "home_language_picker_submit",
                properties: [
                    {
                        name: "language",
                        type: "string"
                    }
                ]
            }, {
                name: "home_dynamic_card_tap",
                properties: [
                    {
                        name: "slug",
                        type: "string"
                    }
                ]
            }, {
                name: "home_featured_question_see_all_tap",
                properties: []
            }, {
                name: "home_featured_question_see_answer_tap",
                properties: []
            }, {
                name: "home_ask_a_question_tap",
                properties: []
            }, {
                name: "home_video_call_tap",
                properties: []
            }, {
                name: "home_featured_expert_tap",
                properties: [
                    {
                        name: "expert_name",
                        type: "string",
                        required: true
                    }
                ]
            }, {
                name: "home_featured_expert_see_all_tap",
                properties: []
            }, {
                name: "home_quiz_tap",
                properties: []
            }, {
                name: "home_featured_article_tap",
                properties: [
                    {
                        name: "slug",
                        type: "string"
                    }
                ]
            }, {
                name: "home_featured_article_see_all_tap",
                properties: []
            }, {
                name: "home_butterfly_tap",
                properties: []
            }, {
                name: "home_search_tap",
                properties: []
            }, {
                name: "home_services_tap",
                properties: []
            }
        ]
    }, {
        screen: "quiz_screen",
        event: [
            {
                name: "quiz_complete",
                properties: [
                    {
                        name: "quiz_category",
                        type: "string"
                    }
                ]
            }
        ]
    }, {
        screen: "search_screen",
        event: [
            {
                name: "search_result_tap",
                properties: [
                    {
                        name: "search_term",
                        type: "string"
                    }
                ]
            }, {
                name: "search_recent_search_tap",
                properties: [
                    {
                        name: "search_term",
                        type: "string"
                    }
                ]
            }, {
                name: "search_tag_tap",
                properties: [
                    {
                        name: "search_term",
                        type: "string"
                    }
                ]
            }
        ]
    }, {
        screen: "answer_screen",
        event: [
            {
                name: "answer_ask_a_question_tap",
                properties: []
            }, {
                name: "answer_save",
                properties: []
            },
            {
                name: "answer_tts_tap",
                properties: []
            }, {
                name: "answer_like_tap",
                properties: []
            }, {
                name: "answer_see_more_tap",
                properties: [
                    {
                        name: "question_id",
                        type: "string"
                    }
                ]
            }, {
                name: "answer_product_carousel_tap",
                properties: [
                    {
                        name: "slug",
                        type: "string"
                    }
                ]
            }, {
                name: "answer_love_tap",
                properties: [
                    {
                        name: "feedback",
                        type: "string",
                        required: true
                    }
                ]
            }, {
                name: "answer_comment_submit",
                properties: []
            }, {
                name: "answer_share_tap",
                properties: []
            }, {
                name: "answer_related_question_tap",
                properties: [
                    {
                        name: "question_id",
                        type: "string",
                        required: true
                    }
                ]
            }, {
                name: "answer_related_article_tap",
                properties: [
                    {
                        name: "slug",
                        type: "string",
                        required: true
                    }
                ]
            }, {
                name: "in_app_trigger_pop_up",
                properties: []
            }, {
                name: "in_app_trigger_action",
                properties: [
                    {
                        name: "feedback",
                        type: "string",
                        required: true
                    },
                    {
                        name: "slug",
                        type: "string"
                    }
                ]
            }
        ]
    }, {
        screen: "bmi_screen",
        event: [
            {
                name: "bmi_submit",
                properties: [
                    {
                        name: "bmi_score",
                        type: "string",
                        required: true
                    }
                ]
            }
        ]
    }, {
        screen: "check_due_date_screen",
        event: [
            {
                name: "due_date_calculate_submit",
                properties: []
            }, {
                name: "due_date_video_call_tap",
                properties: []
            }, {
                name: "due_date_ask_a_question_tap",
                properties: []
            }, {
                name: "due_date_mh_video_call_tap",
                properties: []
            }
        ]
    }, {
        screen: "period_tracker_screen",
        event: [
            {
                name: "period_tracker_info_submit",
                properties: [
                    {
                        name: "infos",
                        type: "string"
                    }
                ]
            }, {
                name: "period_tracker_calender_tap",
                properties: []
            }, {
                name: "period_tracker_period_cycle_tap",
                properties: []
            },
            {
                name: "period_tracker_blog_tap",
                properties: []
            }
        ]
    }, {
        screen: "period_tracker_blog_screen",
        event: [
            {
                name: "period_tracker_article_tap",
                properties: [
                    {
                        name: "slug",
                        type: "string",
                        required: true
                    }
                ]
            }
        ]
    }, {
        screen: "plan_screen",
        event: [
            {
                name: "plan_buy_tap",
                properties: [
                    {
                        name: "package_name",
                        type: "string",
                        required: true
                    },
                    {
                        name: "duration",
                        type: "string",
                        required: true
                    }
                ]
            },
            {
                name: "plan_current_plan_tap",
                properties: [
                    {
                        name: "package_name",
                        type: "string",
                        required: true
                    }
                ]
            }, {
                name: "plan_toggle_tap",
                properties: [
                    {
                        name: "duration",
                        type: "string",
                        required: true
                    }
                ]
            },
            {
                name: "plan_one_time_tap",
                properties: []
            }
        ]
    }, {
        screen: "pre_payment_screen",
        event: [
            {
                name: "promo_apply",
                properties: [
                    {
                        name: "promo_code",
                        type: "string",
                        required: true
                    }
                ]
            }, {
                name: "payment_confirm",
                properties: [
                    {
                        name: "payment_method",
                        type: "string",
                        required: true
                    }
                ]
            }
        ]
    }, {
        screen: "payment_screen",
        event: [
            {
                name: "payment_success",
                properties: [
                    {
                        name: "amount",
                        type: "string",
                        required: true
                    }
                ]
            }, {
                name: "payment_failure",
                properties: [
                    {
                        name: "reason",
                        type: "string"
                    }
                ]
            }
        ]
    }, {
        screen: "billing_info_screen",
        event: [
            {
                name: "details_submit",
                properties: [
                    {
                        name: "invoice",
                        type: "string"
                    }
                ]
            }
        ]
    },
    {
        screen: "profile_screen",
        event: [
            {
                name: "profile_see_offer_tap",
                properties: []
            }, {
                name: "profile_edit_profile_tap",
                properties: []
            }, {
                name: "profile_purchase_history_tap",
                properties: []
            }, {
                name: "profile_answered_question_tap",
                properties: []
            }, {
                name: "profile_pending_question_tap",
                properties: []
            }, {
                name: "profile_expert_follow_up_tap",
                properties: []
            }, {
                name: "profile_video_call_history_tap",
                properties: []
            }, {
                name: "profile_chat_history_tap",
                properties: []
            }, {
                name: "profile_saved_tips_tap",
                properties: []
            }, {
                name: "profile_saved_question_tap",
                properties: []
            }, {
                name: "profile_saved_question_tap",
                properties: []
            }, {
                name: "profile_medicine_order_history_tap",
                properties: []
            }, {
                name: "profile_diagnostic_history_tap",
                properties: []
            }, {
                name: "profile_log_out_tap",
                properties: []
            }
        ]
    }, {
        screen: "personal_info_screen",
        event: [
            {
                name: "personal_info_submit",
                properties: []
            }
        ]
    }, {
        screen: "video_call_history_screen",
        event: [
            {
                name: "video_call_history_item_clicked",
                properties: []
            }, {
                name: "video_call_history_request_video_call_tap",
                properties: []
            }, {
                name: "video_call_history_completed_tap",
                properties: []
            }, {
                name: "video_call_history_cancelled_tap",
                properties: []
            }
        ]
    }, {
        screen: "medicine_order_history_screen",
        event: [
            {
                name: "medicine_order_history_order_delivered_tap",
                properties: []
            },
            {
                name: "medicine_order_history_order_item_tap",
                properties: [
                    {
                        name: "status",
                        type: "string",
                        required: true
                    }
                ]
            }
        ]
    }, {
        screen: "medicine_order_detail_screen",
        event: [
            {
                name: "medicine_order_detail_cancel_tap",
                properties: []
            }
        ]
    }, {
        screen: "medicine_reminder_screen",
        event: [
            {
                name: "medicine_reminder_profile_submit",
                properties: [
                    {
                        name: "image",
                        type: "boolean"
                    }
                ]
            }, {
                name: "medicine_reminder_set_submit",
                properties: [
                    {
                        name: "pill_strength",
                        type: "string"
                    }, {
                        name: "medicine_type",
                        type: "string"
                    }, {
                        name: "reason",
                        type: "boolean"
                    }, {
                        name: "refill_reminder",
                        type: "boolean"
                    }
                ]
            }
        ]
    }, {
        screen: "medicine_reminder_history_screen",
        event: [
            {
                name: "medicine_reminder_history_item_tap",
                properties: []
            }
        ]
    }, {
        screen: "maya_blog_screen",
        event: [
            {
                name: "maya_blog_article_tap",
                properties: [
                    {
                        name: "slug",
                        type: "string",
                        required: true
                    }
                ]
            }
        ]
    }, {
        screen: "video_call_screen",
        event: [
            {
                name: "video_call_instant_tap",
                properties: []
            }, {
                name: "video_call_schedule_tap",
                properties: []
            }, {
                name: "video_call_bottom_slider_tap",
                properties: []
            }, {
                name: "video_call_bottom_slider_book_again_tap",
                properties: [
                    {
                        name: "expert_name",
                        type: "string",
                        required: true
                    }
                ]
            }
        ]
    }, {
        screen: "video_call_slot_screen",
        event: [
            {
                name: "video_call_slot_submit",
                properties: [
                    {
                        name: "date_time",
                        type: "string",
                        required: true
                    }
                ]
            }
        ]
    }, {
        screen: "video_call_patient_info_screen",
        event: [
            {
                name: "video_call_patient_info_instant_proceed",
                properties: []
            }, {
                name: "video_call_patient_info_submit",
                properties: [
                    {
                        name: "infos",
                        type: "string"
                    }
                ]
            }, {
                name: "video_call_patient_profile_change",
                properties: [
                    {
                        name: "infos",
                        type: "string"
                    }
                ]
            }
        ]
    }, {
        screen: "video_call_booking_success_screen",
        event: [
            {
                name: "video_call_booking_success_see_details_tap",
                properties: []
            }
        ]
    }, {
        screen: "video_call_appointment_details_screen",
        event: [
            {
                name: "video_call_appointment_details_cancel_tap",
                properties: []
            }, {
                name: "video_call_appointment_details_reschedule_tap",
                properties: []
            }
        ]
    }, {
        screen: "expert_profile_screen",
        event: [
            {
                name: "expert_profile_appointment_details_tap",
                properties: []
            }, {
                name: "expert_profile_appointment_history_tap",
                properties: []
            }, {
                name: "expert_profile_book_again_tap",
                properties: []
            }
        ]
    }, {
        screen: "instant_video_call_wait_screen",
        event: [
            {
                name: "instant_video_call_no_expert_reschedule_tap",
                properties: []
            }, {
                name: "instant_video_call_no_expert_wait_tap",
                properties: []
            }, {
                name: "instant_video_call_no_expert_cancel_tap",
                properties: []
            }
        ]
    }, {
        screen: "video_call_category_screen",
        event: [
            {
                name: "video_call_category_tap",
                properties: [
                    {
                        name: "category",
                        type: "string",
                        required: true
                    }
                ]
            }
        ]
    }, {
        screen: "select_expert_screen",
        event: [
            {
                name: "select_expert_search_tap",
                properties: [
                    {
                        name: "search_term",
                        type: "string"
                    }
                ]
            }, {
                name: "select_expert_filter_tap",
                properties: [
                    {
                        name: "sort_option",
                        type: "string"
                    }
                ]
            }, {
                name: "select_expert_see_profile_tap",
                properties: []
            }, {
                name: "select_expert_book_appointment_tap",
                properties: []
            }, {
                name: "select_expert_book_again_tap",
                properties: []
            }
        ]
    }, {
        screen: "vaccine_reminder_scree",
        event: [
            {
                name: "vaccine_reminder_baby_profile_submit",
                properties: [
                    {
                        name: "image",
                        type: "boolean",
                        required: true
                    }
                ]
            }, {
                name: "vaccine_reminder_baby_update_submit",
                properties: []
            }, {
                name: "vaccine_reminder_baby_list_tap",
                properties: []
            }, {
                name: "vaccine_reminder_female_profile_submit",
                properties: []
            }, {
                name: "vaccine_reminder_female_update_submit",
                properties: []
            }, {
                name: "vaccine_reminder_female_list_tap",
                properties: []
            }
        ]
    }, {
        screen: "services_screen",
        event: [
            {
                name: "services_personalize_tap",
                properties: []
            }, {
                name: "services_language_submit",
                properties: [
                    {
                        name: "language",
                        type: "string",
                        required: true
                    }
                ]
            }, {
                name: "services_invite_code_tap",
                properties: []
            }, {
                name: "services_promo_code_tap",
                properties: []
            }, {
                name: "services_invite_submit",
                properties: []
            }, {
                name: "services_invite_code_copy_tap",
                properties: []
            }, {
                name: "services_report_issue_tap",
                properties: []
            }, {
                name: "services_rate_tap",
                properties: []
            }, {
                name: "services_video_tap",
                properties: []
            }, {
                name: "services_faq_tap",
                properties: []
            }, {
                name: "services_about_us_tap",
                properties: []
            }, {
                name: "services_contact_us_tap",
                properties: []
            }, {
                name: "services_disclaimer_tap",
                properties: []
            }, {
                name: "services_bubble_ask_a_question_tap",
                properties: []
            }, {
                name: "services_bubble_video_call_tap",
                properties: []
            }
        ]
    }, {
        screen: "contact_us_screen",
        event: [
            {
                name: "contact_us_feedback_submit",
                properties: []
            }
        ]
    }, {
        screen: "personalize_screen",
        event: [
            {
                name: "personalization_submit",
                properties: [
                    {
                        name: "tag",
                        type: "string"
                    }
                ]
            }
        ]
    }, {
        screen: "invite_code_screen",
        event: [
            {
                name: "invite_code_submit",
                properties: [
                    {
                        name: "code",
                        type: "string",
                        required: true
                    }
                ]
            }
        ]
    }, {
        screen: "promo_code_screen",
        event: [
            {
                name: "promo_code_submit",
                properties: [
                    {
                        name: "promo_code",
                        type: "string",
                        required: true
                    }
                ]
            }
        ]
    }, {
        screen: "complaint_category_screen",
        event: [
            {
                name: "complaint_category_tap",
                properties: [
                    {
                        name: "category",
                        type: "string",
                        required: true
                    }
                ]
            }
        ]
    }, {
        screen: "complaint_screen",
        event: [
            {
                name: "complaint_details_submit",
                properties: [
                    {
                        name: "infos",
                        type: "string"
                    }
                ]
            }
        ]
    }, {
        screen: "complaint_contact_screen",
        event: [
            {
                name: "complaint_submit",
                properties: [
                    {
                        name: "phone",
                        type: "string",
                        required: true
                    }, {
                        name: "email",
                        type: "string"
                    }
                ]
            }
        ]
    }, {
        screen: "pww_screen",
        event: [
            {
                name: "pww_week_tap",
                properties: [
                    {
                        name: "week",
                        type: "string",
                        required: true
                    }
                ]
            }, {
                name: "pww_first_trimester_tap",
                properties: []
            }, {
                name: "pww_second_trimester_tap",
                properties: []
            }, {
                name: "pww_third_trimester_tap",
                properties: []
            }, {
                name: "pww_check_due_date_tap",
                properties: []
            }, {
                name: "pww_video_call_tap",
                properties: []
            }, {
                name: "pww_ask_a_question_tap",
                properties: []
            }, {
                name: "pww_mh_video_call_tap",
                properties: []
            }
        ]
    }, {
        screen: "symptom_checker_screen",
        event: [
            {
                name: "symptom_check_submit",
                properties: [
                    {
                        name: "category",
                        type: "string",
                        required: true
                    }
                ]
            }, {
                name: "symptom_check_result_video_call_tap",
                properties: [
                    {
                        name: "category",
                        type: "string",
                        required: true
                    }
                ]
            }, {
                name: "symptom_check_result_question_tap",
                properties: [
                    {
                        name: "category",
                        type: "string",
                        required: true
                    }
                ]
            },
        ]
    }, {
        screen: "push_notification_screen",
        event: [
            {
                name: "notification_received",
                properties: [
                    {
                        name: "infos",
                        type: "string"
                    }
                ]
            }, {
                name: "notification_opened",
                properties: [
                    {
                        name: "slug",
                        type: "string"
                    }
                ]
            }
        ]
    }
]