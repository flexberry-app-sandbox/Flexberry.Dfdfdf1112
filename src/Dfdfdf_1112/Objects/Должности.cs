﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Dfdfdf_1112
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Должности.
    /// </summary>
    // *** Start programmer edit section *** (Должности CustomAttributes)

    // *** End programmer edit section *** (Должности CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ДолжностиE", new string[] {
            "Код as \'Код\'",
            "Наименование as \'Наименование\'"})]
    [View("ДолжностиL", new string[] {
            "Код as \'Код\'",
            "Наименование as \'Наименование\'"})]
    public class Должности : ICSSoft.STORMNET.DataObject
    {
        
        private int fКод;
        
        private string fНаименование;
        
        // *** Start programmer edit section *** (Должности CustomMembers)

        // *** End programmer edit section *** (Должности CustomMembers)

        
        /// <summary>
        /// Код.
        /// </summary>
        // *** Start programmer edit section *** (Должности.Код CustomAttributes)

        // *** End programmer edit section *** (Должности.Код CustomAttributes)
        public virtual int Код
        {
            get
            {
                // *** Start programmer edit section *** (Должности.Код Get start)

                // *** End programmer edit section *** (Должности.Код Get start)
                int result = this.fКод;
                // *** Start programmer edit section *** (Должности.Код Get end)

                // *** End programmer edit section *** (Должности.Код Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Должности.Код Set start)

                // *** End programmer edit section *** (Должности.Код Set start)
                this.fКод = value;
                // *** Start programmer edit section *** (Должности.Код Set end)

                // *** End programmer edit section *** (Должности.Код Set end)
            }
        }
        
        /// <summary>
        /// Наименование.
        /// </summary>
        // *** Start programmer edit section *** (Должности.Наименование CustomAttributes)

        // *** End programmer edit section *** (Должности.Наименование CustomAttributes)
        [StrLen(255)]
        public virtual string Наименование
        {
            get
            {
                // *** Start programmer edit section *** (Должности.Наименование Get start)

                // *** End programmer edit section *** (Должности.Наименование Get start)
                string result = this.fНаименование;
                // *** Start programmer edit section *** (Должности.Наименование Get end)

                // *** End programmer edit section *** (Должности.Наименование Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Должности.Наименование Set start)

                // *** End programmer edit section *** (Должности.Наименование Set start)
                this.fНаименование = value;
                // *** Start programmer edit section *** (Должности.Наименование Set end)

                // *** End programmer edit section *** (Должности.Наименование Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ДолжностиE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ДолжностиE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ДолжностиE", typeof(IIS.Dfdfdf_1112.Должности));
                }
            }
            
            /// <summary>
            /// "ДолжностиL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ДолжностиL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ДолжностиL", typeof(IIS.Dfdfdf_1112.Должности));
                }
            }
        }
    }
}
